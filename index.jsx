import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h1 className="text-5xl font-bold tracking-tight">
            Helping Business Owners Stay Organized & Save Time
          </h1>
          <p className="text-xl text-gray-600">
            General Virtual Assistant | Reliable • Detail-Oriented • Efficient
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <a href="https://wa.me/639241232790" target="_blank">
              <Button className="rounded-2xl px-6 bg-green-500 hover:bg-green-600 text-white">
                Hire Me on WhatsApp
              </Button>
            </a>
          </div>
        </motion.div>

        {/* About */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="rounded-2xl shadow-lg">
            <CardContent className="p-8 space-y-4">
              <h2 className="text-2xl font-semibold">About Me</h2>
              <p className="text-gray-600 leading-relaxed">
                I help busy professionals and business owners handle time-consuming tasks so they can focus on growing their business. With a strong background in research, data organization, and reporting, I provide reliable and efficient virtual assistance.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Problems I Solve */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">How I Help You</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Inbox overload and missed emails",
              "Unorganized files and data",
              "Time-consuming research tasks",
            ].map((item, i) => (
              <Card key={i} className="rounded-2xl shadow">
                <CardContent className="p-6 text-center text-gray-600">
                  {item}
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Data Entry & File Organization",
              "Online Research",
              "Email & Calendar Management",
              "Report Creation & Documentation",
            ].map((service, i) => (
              <Card key={i} className="rounded-2xl shadow hover:shadow-xl transition">
                <CardContent className="p-6">
                  <p className="text-gray-700">{service}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Me */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="rounded-2xl shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Why Choose Me</h2>
              <ul className="space-y-2 text-gray-600">
                <li>✔ Detail-oriented and highly organized</li>
                <li>✔ Fast learner and adaptable</li>
                <li>✔ Reliable and responsive communication</li>
                <li>✔ Committed to delivering quality work</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Sample Work */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Sample Work</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Data Entry Project",
              "Online Research Report",
              "Email Organization System",
            ].map((item, i) => (
              <Card key={i} className="rounded-2xl shadow">
                <CardContent className="p-6">
                  <p className="font-medium">{item}</p>
                  <p className="text-sm text-gray-500">Example of my work</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="rounded-2xl shadow-lg">
            <CardContent className="p-8 text-center space-y-4">
              <h2 className="text-2xl font-semibold">Ready to make your work easier?</h2>
              <p className="text-gray-600">
                Message me today and let's get started.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://wa.me/639241232790" target="_blank">
                  <Button className="rounded-xl px-6 bg-green-500 hover:bg-green-600 text-white">
                    WhatsApp Me
                  </Button>
                </a>
                <a href="mailto:bonzodarylljohn@gmail.com">
                  <Button className="rounded-xl px-6">
                    Email Me
                  </Button>
                </a>
                <a href="https://ph.linkedin.com/in/daryll-bonzo-02a0632b0" target="_blank">
                  <Button variant="outline" className="rounded-xl px-6">
                    LinkedIn
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>

      </div>
    </div>
  );
}
