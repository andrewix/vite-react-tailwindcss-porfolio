import { type FormEvent, useState, type React } from "react"
import { Linkedin, Github, Send } from "lucide-react"

const GOOGLE_FORM_ACTION_URL =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLSf4JXFPHn0vi-34ZvqL7aI57DzSr7AktjA8GHSbslAzwg3Hvw/formResponse"

const FORM_FIELDS = {
  name: "entry.2066262918",
  email: "entry.396114062",
  message: "entry.1067426395",
}

const CONTACT_INFO = [
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/andrew-boutres",
    url: "https://www.linkedin.com/in/andrew-boutres/",
  },
  {
    icon: Github,
    title: "GitHub",
    value: "github.com/drewIscoding",
    url: "https://github.com/drewIscoding",
  },
]

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const form = new FormData()
    Object.entries(formData).forEach(([key, value]) => {
      form.append(FORM_FIELDS[key as keyof typeof FORM_FIELDS], value)
    })

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        body: form,
        mode: "no-cors",
      })
      setIsSubmitted(true)
      setFormData({ name: "", email: "", message: "" })

      setTimeout(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        })
      }, 100)

      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-16 text-center text-gray-800">Get in Touch</h1>

        <div className="grid md:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm formData={formData} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
        </div>

        {isSubmitted && <SuccessMessage />}
      </div>
    </div>
  )
}

function ContactInfo() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold text-gray-800">Contact Information</h2>
      <div className="space-y-6">
        {CONTACT_INFO.map(({ icon: Icon, title, value, url }, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-blue-500 text-white">
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">{title}</h3>
              <a
                href={url}
                className="text-blue-500 hover:opacity-80 transition-opacity duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                {value}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ContactForm({ formData, handleInputChange, handleSubmit }) {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold text-gray-800">Send a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField label="Name" name="name" value={formData.name} onChange={handleInputChange} />
        <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleInputChange} />
        <TextAreaField label="Message" name="message" value={formData.message} onChange={handleInputChange} />
        <SubmitButton />
      </form>
    </div>
  )
}

function InputField({ label, name, type = "text", value, onChange }) {
  return (
    <div>
      <label className="block mb-2 font-medium text-gray-800">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="w-full px-4 py-2 rounded-lg border border-blue-500 transition-colors duration-200 focus:outline-none focus:border-blue-600"
        placeholder={`Your ${label.toLowerCase()}`}
      />
    </div>
  )
}

function TextAreaField({ label, name, value, onChange }) {
  return (
    <div>
      <label className="block mb-2 font-medium text-gray-800">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        required
        rows={4}
        className="w-full px-4 py-2 rounded-lg border border-blue-500 transition-colors duration-200 focus:outline-none focus:border-blue-600"
        placeholder="Your message..."
      ></textarea>
    </div>
  )
}

function SubmitButton() {
  return (
    <button
      type="submit"
      className="w-full flex items-center justify-center px-6 py-3 rounded-lg bg-blue-500 text-white transition-all duration-200 hover:bg-blue-600 hover:scale-105"
    >
      Send Message
      <Send className="ml-2 h-4 w-4" />
    </button>
  )
}

function SuccessMessage() {
  return (
    <div className="mt-12 text-center space-y-6">
      <div className="p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Thank You!</h2>
        <p className="text-lg mb-6 text-green-600">
          Your message has been sent successfully. We'll get back to you soon!
        </p>
      </div>
    </div>
  )
}

