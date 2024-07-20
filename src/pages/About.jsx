import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
      className="w-full mx-auto px-6 py-8"
    >
      <div className="about-page flex flex-col gap-6">
        <header className="about-header">
          <h1 className="text-3xl font-bold text-colortext-primary">Cupidy - Find Your Perfect Match</h1>
          <p className="tagline text-gray-600 italic">"Where Hearts Connect!"</p>
        </header>

        <section className="app-purpose" id='purpose'>
          <h2 className="text-xl text-colortext-primary font-semibold">App Purpose</h2>
          <div className="mission-statement p-4">
            <h3 className="text-lg font-semibold">Mission Statement</h3>
            <p>
              At Cupidy, our mission is to bring people together to form genuine and lasting relationships. 
              Whether you're searching for love, companionship, or friendship, Cupidy is the platform that helps you find your perfect match.
            </p>
          </div>
          <div className="goals p-4">
            <h3 className="text-lg font-semibold">Goals</h3>
            <ul className="px-6 list-disc">
              <li><span className="font-semibold text-colortext-primary">Create - </span> a safe and welcoming space for users to meet and interact.</li>
              <li><span className="font-semibold text-colortext-primary">Utilize - </span> cutting-edge technology to provide accurate and meaningful matches.</li>
              <li><span className="font-semibold text-colortext-primary">Offer - </span> a variety of interactive features to enhance the user experience.</li>
              <li><span className="font-semibold text-colortext-primary">Foster - </span> a community where users can connect and grow together.</li>
            </ul>
          </div>
        </section>

        <section className="features-overview flex flex-col gap-6">
          <h2 className="text-xl font-semibold text-colortext-primary">Features</h2>
          <div className="features p-4">
            <h3 className="text-lg font-semibold">Overview of Features</h3>
            <ul className="px-4 list-disc">
              <li>Smart Matching Algorithm: Our advanced algorithm matches you with users who share your interests and values.</li>
              <li>Secure Chat: Private messaging to help you get to know your matches better.</li>
              <li>Customizable Profiles: Showcase your personality and preferences.</li>
              <li>Advanced Search Filters: Find potential matches based on location, age, interests, and more.</li>
            </ul>
          </div>
        </section>

        <section className="how-it-works flex flex-col gap-6">
          <h2 className="text-xl font-semibold text-colortext-primary">How It Works</h2>
          <ol className="px-6 list-decimal">
            <li><strong className="text-colortext-primary">Sign Up:</strong> Create an account quickly using your email or social media.</li>
            <li><strong className="text-colortext-primary">Build Your Profile:</strong> Add details about yourself and what you're looking for.</li>
            <li><strong className="text-colortext-primary">Find Matches:</strong> Browse profiles and use our matching algorithm to find the best matches.</li>
            <li><strong className="text-colortext-primary">Chat and Connect:</strong> Start conversations with your matches.</li>
          </ol>
        </section>

        <section className="get-started-planning" id='planning'>
          <h2 className="text-xl text-colortext-primary font-semibold">Get Started & Planning</h2>
          <div className="sdlc px-4 p-2">
            <h3 className="text-lg font-semibold">SDLC: Agile Model</h3>
            <p>
              We follow the Agile development model, which allows us to continuously improve and quickly deliver new features. 
              Our development is divided into four iterations:
            </p>
            <div className="iterations p-4">
              <div className="iteration mb-4">
                <h4 className="text-lg font-semibold">First Iteration:</h4>
                <ul className="list-disc pl-4">
                  <li>Implement Login, Sign-in, and Sign-up functionalities.</li>
                  <li>Collect user data and create user profiles.</li>
                  <li>Develop matching algorithms to connect users based on their preferences.</li>
                </ul>
              </div>
              <div className="iteration mb-4">
                <h4 className="text-lg font-semibold">Second Iteration:</h4>
                <ul className="list-disc pl-4">
                  <li>Create the Admin Dashboard for better management.</li>
                  <li>Implement other mini features to enhance user experience.</li>
                </ul>
              </div>
              <div className="iteration mb-4">
                <h4 className="text-lg font-semibold">Third Iteration:</h4>
                <ul className="list-disc pl-4">
                  <li>Develop the Chatting Workspace to enable users to communicate with each other.</li>
                </ul>
              </div>
              <div className="iteration mb-4">
                <h4 className="text-lg font-semibold">Fourth Iteration:</h4>
                <ul className="list-disc pl-4">
                  <li>Set up Website Settings.</li>
                  <li>Create the About Us page.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="safety-privacy" id='safety'>
          <h2 className="text-xl text-colortext-primary font-semibold">Safety and Privacy</h2>
          <div className="safety-tips p-4">
            <h3 className="text-lg font-semibold">Safety Tips</h3>
            <ul className="list-disc pl-4">
              <li>Do not share personal information like your home address or financial details.</li>
              <li>Always meet in public places for your initial dates.</li>
              <li>Trust your instincts and report any suspicious behavior.</li>
            </ul>
          </div>
          <div className="privacy-policy p-4">
            <h3 className="text-lg font-semibold">Privacy Policy</h3>
            <p>
              At Cupidy, your privacy is our priority. We are committed to safeguarding your personal data. 
              <a href="/privacy-policy" className="text-colortext-primary underline">Read our full Privacy Policy here.</a>
            </p>
          </div>
        </section>

        <section className="team" id='team'>
          <h2 className="text-xl text-colortext-primary font-semibold">Meet the Cupidy Team</h2>
          <div className="team-members p-4">
            <div className="member mb-4">
              <h3 className="text-lg font-semibold">Moe Yan: Project Manager</h3>
              <p>Leading the project with expertise and vision, ensuring everything runs smoothly.</p>
            </div>
            <div className="member mb-4">
              <h3 className="text-lg font-semibold">Thin Esther: Data Collector</h3>
              <p>Responsible for gathering and analyzing user data to improve the app's performance and user experience.</p>
            </div>
            <div className="member mb-4">
              <h3 className="text-lg font-semibold">Helen: Frontend Developer</h3>
              <p>Creating beautiful and functional user interfaces for an engaging user experience.</p>
            </div>
            <div className="member mb-4">
              <h3 className="text-lg font-semibold">Arkar: Frontend Developer</h3>
              <p>Collaborating on the design and implementation of the app's frontend features.</p>
            </div>
            <div className="member mb-4">
              <h3 className="text-lg font-semibold">Brang: Frontend Developer</h3>
              <p>Enhancing the app's look and feel, ensuring a seamless user experience.</p>
            </div>
            <div className="member mb-4">
              <h3 className="text-lg font-semibold">Shine Bo Bo: Backend Developer</h3>
              <p>Developing the server-side logic, database management, and ensuring the app's scalability.</p>
            </div>
            <div className="member mb-4">
              <h3 className="text-lg font-semibold">Lin Pyae: Backend Developer</h3>
              <p>Working on backend functionalities to support the app's core features and performance.</p>
            </div>
          </div>
        </section>

        <section className="faqs" id='faq'>
          <h2 className="text-xl text-colortext-primary font-semibold">Frequently Asked Questions</h2>
          <div className="faq-items p-4">
            <div className="faq-item mb-4">
              <h3 className="text-lg font-semibold">How do I create an account?</h3>
              <p>Sign up with your email or social media account and follow the prompts to build your profile.</p>
            </div>
            <div className="faq-item mb-4">
              <h3 className="text-lg font-semibold">Is Cupidy free to use?</h3>
              <p>Yes, Cupidy offers basic features for free. Premium features are available through subscription plans.</p>
            </div>
            <div className="faq-item mb-4">
              <h3 className="text-lg font-semibold">How can I report a user?</h3>
              <p>Use the 'Report' button on the user's profile or contact our support team.</p>
            </div>
            <div className="faq-item mb-4">
              <h3 className="text-lg font-semibold">What if I forget my password?</h3>
              <p>Click on 'Forgot Password' on the login page and follow the instructions to reset it.</p>
            </div>
          </div>
        </section>

        <section className="contact-information" id='contact'>
          <h2 className="text-xl text-colortext-primary font-semibold">Contact Information</h2>
          <div className="support-feedback p-4">
            <h3 className="text-lg font-semibold">Support and Feedback</h3>
            <p>
              Need help or want to share your thoughts? Visit our 
              <a href="/support" className="text-colortext-primary underline"> Support Page </a> 
              or email us at 
              <a href="mailto:cupidyhepta@gmail.com" className="text-colortext-primary underline"> cupidyhepta@gmail.com</a>. 
              We love hearing from you and appreciate your feedback!
            </p>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default About;
