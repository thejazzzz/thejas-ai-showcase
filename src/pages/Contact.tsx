
import ContactForm from "@/components/ContactForm";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-12">Get In Touch</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-lg mb-8">
              Have a question or want to work together? Feel free to contact me through any of the methods below or by using the contact form.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-tech-blue/10 p-3 rounded-full mr-4">
                  <Mail className="contact-icon" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a 
                    href="mailto:thejasthomas2@gmail.com" 
                    className="text-tech-blue hover:underline"
                  >
                    thejasthomas2@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-tech-blue/10 p-3 rounded-full mr-4">
                  <Phone className="contact-icon" />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <a 
                    href="tel:+919496195654" 
                    className="text-tech-blue hover:underline"
                  >
                    +91 9496195654
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-tech-blue/10 p-3 rounded-full mr-4">
                  <MapPin className="contact-icon" />
                </div>
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p>Mavelikkara, IN 690105</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-tech-blue/10 p-3 rounded-full mr-4">
                  <Linkedin className="contact-icon" />
                </div>
                <div>
                  <h3 className="font-medium">LinkedIn</h3>
                  <a 
                    href="https://www.linkedin.com/in/thejas-thomas-5834a0253" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-tech-blue hover:underline"
                  >
                    linkedin.com/in/thejas-thomas-5834a0253
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-tech-blue/10 p-3 rounded-full mr-4">
                  <Github className="contact-icon" />
                </div>
                <div>
                  <h3 className="font-medium">GitHub</h3>
                  <a 
                    href="https://github.com/thejazzzz" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-tech-blue hover:underline"
                  >
                    github.com/thejazzzz
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-secondary/20 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
