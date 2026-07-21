"use client";

import { useState, useEffect } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Send, AlertCircle, Loader2 } from "lucide-react";

// LAYER 4: ZOD STRICT VALIDATION
const formSchema = z.object({
    name: z.string().min(2, "Name is required (at least 2 characters)").max(100),
    phone: z.string().min(10, "Phone number must be at least 10 digits").max(15, "Invalid phone number"),
    company: z.string().max(100).optional(),
    message: z.string().min(10, "Message must be at least 10 characters").max(2000),
    website_url: z.string().max(0), // Honeypot
});

type FormData = z.infer<typeof formSchema>;

export default function SecureContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        phone: "",
        company: "",
        message: "",
        website_url: "",
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [cooldownTime, setCooldownTime] = useState(0);

    // LAYER 2 (Frontend): CHECK LOCAL STORAGE FOR COOLDOWN
    useEffect(() => {
        const lastSubmission = localStorage.getItem("last_form_submission");
        if (lastSubmission) {
            const timePassed = Date.now() - parseInt(lastSubmission);
            const cooldown = 5 * 60 * 1000; // 5 minutes in milliseconds
            if (timePassed < cooldown) {
                setCooldownTime(Math.ceil((cooldown - timePassed) / 1000 / 60));
            }
        }
    }, []);

    // Cooldown countdown timer
    useEffect(() => {
        if (cooldownTime <= 0) return;
        const timer = setInterval(() => {
            const lastSubmission = localStorage.getItem("last_form_submission");
            if (lastSubmission) {
                const timePassed = Date.now() - parseInt(lastSubmission);
                const cooldown = 5 * 60 * 1000;
                const remaining = Math.ceil((cooldown - timePassed) / 1000 / 60);
                if (remaining <= 0) {
                    setCooldownTime(0);
                    clearInterval(timer);
                } else {
                    setCooldownTime(remaining);
                }
            }
        }, 10000);
        return () => clearInterval(timer);
    }, [cooldownTime]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => {
                const newErrs = { ...prev };
                delete newErrs[name];
                return newErrs;
            });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Fallback Honeypot Check
        if (formData.website_url.length > 0) return;

        // Enforce Cooldown
        if (cooldownTime > 0) {
            setErrorMessage(`Please wait ${cooldownTime} minutes before submitting another inquiry.`);
            return;
        }

        // Zod validation
        const result = formSchema.safeParse(formData);
        if (!result.success) {
            const fieldErrors: Record<string, string> = {};
            result.error.issues.forEach((issue) => {
                const path = issue.path[0] as string;
                if (path) fieldErrors[path] = issue.message;
            });
            setErrors(fieldErrors);
            return;
        }

        setErrors({});
        setIsSubmitting(true);
        setErrorMessage("");

        try {
            // GOOGLE APPS SCRIPT WEB APP URL
            const scriptUrl = "https://script.google.com/macros/s/AKfycbw8n6U0R2nstElnmusb-SOEdzXihO_-9KxKgKP-cnRU6r8Lw7cg6VBHjLeGfHjkURHr/exec";

            await fetch(scriptUrl, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            // Set local cooldown timer upon success
            localStorage.setItem("last_form_submission", Date.now().toString());

            setIsSubmitting(false);
            setIsSuccess(true);
            setFormData({ name: "", phone: "", company: "", message: "", website_url: "" });

        } catch (error) {
            console.error("Submission failed:", error);
            setErrorMessage("Failed to send message. Please try again.");
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="p-8 sm:p-12 text-center bg-green-50/70 border border-green-200 rounded-2xl animate-in fade-in duration-500 space-y-4">
                <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Message Received!</h3>
                <p className="text-slate-600 max-w-md mx-auto leading-relaxed text-sm">
                    Thank you for reaching out to Amba Plastolite. Our team will review your inquiry and get back to you shortly.
                </p>
                <Button
                    onClick={() => setIsSuccess(false)}
                    variant="outline"
                    className="mt-4 border-green-600 text-green-800 hover:bg-green-100"
                >
                    Send Another Message
                </Button>
            </div>
        );
    }

    const isFormValid = formSchema.safeParse(formData).success;

    return (
        <form onSubmit={handleSubmit} className="space-y-5 w-full">
            
            {/* LAYER 1: THE HONEYPOT FIELD */}
            <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
                <label htmlFor="website_url">Website URL</label>
                <input
                    id="website_url"
                    name="website_url"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website_url}
                    onChange={handleChange}
                />
            </div>

            {errorMessage && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm font-medium flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>{errorMessage}</span>
                </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full border p-3.5 rounded-xl text-sm transition-all bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 ${errors.name ? "border-red-400 focus:ring-red-200" : "border-slate-300 focus:ring-blue-900/20 focus:border-blue-900"
                            }`}
                        placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.name}</p>}
                </div>

                <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full border p-3.5 rounded-xl text-sm transition-all bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 ${errors.phone ? "border-red-400 focus:ring-red-200" : "border-slate-300 focus:ring-blue-900/20 focus:border-blue-900"
                            }`}
                        placeholder="12345 78910"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.phone}</p>}
                </div>
            </div>

            <div>
                <label htmlFor="company" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Company / Organization <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full border border-slate-300 p-3.5 rounded-xl text-sm transition-all bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900"
                    placeholder="Agro-Chemicals Pvt Ltd"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Message / Inquiry <span className="text-red-500">*</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full border p-3.5 rounded-xl text-sm transition-all bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 ${errors.message ? "border-red-400 focus:ring-red-200" : "border-slate-300 focus:ring-blue-900/20 focus:border-blue-900"
                        }`}
                    placeholder="Specify bottle capacities (e.g. 500ml, 1L), quantities, or custom mold requirements..."
                />
                {errors.message && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.message}</p>}
            </div>

            <Button
                type="submit"
                disabled={isSubmitting || cooldownTime > 0 || !isFormValid}
                className="w-full bg-blue-900 hover:bg-blue-950 text-white py-4 h-13 rounded-xl font-bold uppercase tracking-wider text-xs disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Transmitting...</span>
                    </>
                ) : cooldownTime > 0 ? (
                    `Cooldown Active (${cooldownTime}m)`
                ) : (
                    <>
                        <Send className="w-4 h-4" />
                        <span>Submit Inquiry</span>
                    </>
                )}
            </Button>
        </form>
    );
}
