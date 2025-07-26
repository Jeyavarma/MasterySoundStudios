import { Mail, Send, Handshake, PhoneCall, MessageCircle, Info } from "lucide-react"

export default function CreativeContactSection() {
  const options = [
    {
      icon: <Send size={32} />,
      title: "Start a Project",
      description: "Let’s bring your ideas to life!",
      link: "mailto:masterysoundstudios@gmail.com?subject=Project%20Inquiry",
    },
    {
      icon: <Mail size={32} />,
      title: "Say Hello",
      description: "Just want to chat or ask something?",
      link: "mailto:masterysoundstudios@gmail.com?subject=Hello",
    },
    {
      icon: <Handshake size={32} />,
      title: "Collaboration",
      description: "Interested in teaming up for creative work?",
      link: "mailto:masterysoundstudios@gmail.com?subject=Collaboration%20Opportunity",
    },
    {
      icon: <PhoneCall size={32} />,
      title: "Book a Recording",
      description: "Schedule your recording session or a meeting with us.",
      link: "mailto:masterysoundstudios@gmail.com?subject=Book%20a%20Recording",
    },
    {
      icon: <MessageCircle size={32} />,
      title: "Feedback",
      description: "Share your feedback and help us improve!",
      link: "mailto:masterysoundstudios@gmail.com?subject=Feedback",
    },
    {
      icon: <Info size={32} />,
      title: "Request Info",
      description: "Need more details about our services?",
      link: "mailto:masterysoundstudios@gmail.com?subject=Request%20Information",
    },
  ]

  return (
    <section id="contact" className="bg-gray-100 py-28 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-purple-800 mb-3">
          CONNECT <span className="text-gray-700">WITH US</span>
        </h2>
        <p className="text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
          Whether you have a business opportunity or just want to say hi — we’d love to hear from you!
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {options.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-purple-600 hover:-translate-y-1"
            >
              <div className="flex justify-center mb-6 text-purple-700 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-purple-700">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
