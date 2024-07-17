import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return(
    <motion.div
      initial={{opacity: 0 }}
        animate={{opacity: 1}}
        transition={{duration: .9}}
        className='container mx-auto px-6 py-8'
    >
      <h1 className="text-5xl font-bold mb-4">Cupidy Privacy Policy Center</h1>

      <p className="text-gray-700 mb-4">
        Welcome to Cupidy Privacy Policy (“Policy”)! This explains how we
        collect, store, protect and share your information, and with whom we
        share it. We suggest you read this in conjunction with our Terms and
        Conditions of Use.
      </p>

      <h2 className="text-2xl font-bold mb-2" >Our Commitment</h2>
      <p className="text-gray-700 mb-4">
        We take the safety, security and well-being of our users very seriously.
        As the world’s most popular app for meeting new people, we take pride in
        connecting millions of people every day. While a relatively small
        percentage of these matches have led to users falling victim to criminal
        activity, we firmly believe any incident of misconduct or criminal
        behavior is one too many.
      </p>
      <p className="text-gray-700 mb-4">
        We are continuously exploring new updates, partnerships and technologies
        to enhance and inform our safety efforts while fostering a respectful
        environment for meeting new people.Our goalremains the same: a safe and
        positive experience for users on our platform.
      </p>

      <h2 className="text-2xl font-bold mb-2">Our Safety Tools</h2>

      <p className="text-gray-700 mb-4">
        We utilize a network of industry-leading automated and manual moderation
        and review tools, systems and processes - and invest significant
        resources - to prevent, monitor and remove inappropriate behavior
        (impersonation, harassment and more) from our app.
      </p>
      <p className="text-gray-700 mb-4">
        These tools include automatic scans of profiles for red-flag language
        and images; manual reviews of suspicious profiles, activity, and user
        generated reports; shadow-banning suspicious accounts; as well as
        blocking of email addresses, phone numbers, IP addresses and other
        identifiers associated with bad actors.
      </p>
      <p className="text-gray-700 mb-4">
        We have a zero-tolerance policy on harassment and encourage our
        community to report any instance of misconduct and/or anyone who
        violates our Community Guidelines or Terms of Use, via the
        self-reporting tool featured on all Cupidy profiles or by contacting our
        team online. In the event that we receive such a report, our dedicated
        community team takes appropriate measures, which may include removing
        the content, banning the user, or notifying the appropriate law
        enforcement resources.
      </p>
      <p className="text-gray-700 mb-4">
        We are constantly evaluating and refining our processes, and will always
        work with law enforcement, where possible, to protect our users.
      </p>

      <h2 className="text-2xl font-bold mb-2">
        Response to Reports of Assault
      </h2>

      <p className="text-gray-700 mb-4">
        Cupidy users can easily report instances of abuse or assault in-app or
        online. We strongly encourage any user who believes they have been a
        victim of a crime to report it to law enforcement. Our team works to
        promptly investigate reported crimes, assess and take appropriate
        action, and fully cooperates with law enforcement in any investigation.
      </p>
      <p className="text-gray-700 mb-4">
        When a user reports an assault to Tinder, we attempt to identify the
        alleged perpetrator and block the associated account. The incident is
        then reported to Match Group’s centralized safety repository and checked
        across our various brands to see if the user has other accounts on other
        platforms. If any are found, they are blocked as well.
      </p>

      <h2 className="text-2xl font-bold mb-2">User Education</h2>

      <p className="text-gray-700 mb-4">
        We offer safety tips, both online and via the app, to educate and
        empower users to make smart and safe choices while interacting on
        Tinder.
      </p>

      <h2 className="text-2xl font-bold mb-2" id='fraud'>Fraud</h2>
      <p className="text-gray-700">
        We take the issue of fraud very seriously at Cupidy. We have a
        zero-tolerance policy on predatory behavior of any kind. We have a
        dedicated fraud team that utilizes a network of industry leading
        technology that scans for fraud and reviews each and every member
        profile for red flag language, and conducts manual reviews of suspicious
        profiles, activity, and user generated reports. Ultimately, no one,
        whether they met on Cupidy or not, should ever send money to someone
        they haven't met in person. In addition, we encourage our members to
        report any individual who has requested financial information via our
        self reporting tool. Those two steps will greatly assist in stopping
        almost every scam in its tracks and help protect the next potential
        victim.
      </p>

      <h2 className="text-2xl font-bold mb-2">
        Data Privacy and Platform Security
      </h2>
      <p className="text-gray-700">
        Our users’ privacy is a top priority at Cupidy, and we work diligently
        to ensure that we go above and beyond applicable privacy laws and
        industry standards. We know that your time on the app is a private
        matter and have strict policies and technical systems in place,
        including encryption for user photos and messages and tools that
        restrict employee access to user communications and other user data.
        When it comes to Cupidy users’ data, our sole mandate is keeping our
        users safe and their data private.
      </p>
      <p className="text-gray-700">
        We do not sell data to third parties or depend on advertising to
        maintain or grow our business. Your data is yours. As such, users can
        request a copy of their data here at any time. The most up-to-date
        information on our data practices is always available to the general
        public through our Privacy Policy, which can be also accessed through
        our app.
      </p>
      <p className="text-gray-700">
        Additionally, we are constantly improving our defenses in the battle
        against those with malicious intent. However, we do not discuss any
        specific security tools we use or enhancements we may implement to best
        protect our users and avoid tipping off any would-be offenders.
      </p>

      <h2 className="text-2xl font-bold mb-2" id='hello'>
        Additional Policies and Information
      </h2>
      <p className="text-gray-700">
        Our fundamental goal is to introduce our community of users to new
        people. And while this is a lot of fun, it’s important to remember that
        there are Community Guidelines that our users must abide by to help make
        Tinder the best app for meeting new people.
      </p>
      <p className="text-gray-700">
        We encourage our users to report any instance of bad behavior on or off
        our platform. Reporting a user for inappropriate conduct is
        straightforward and easy to do. On any given profile, users can tap the
        ‘3 dots’ icon and select ‘Report’. Users can also report another user by
        submitting a help request online.
      </p>
      <p className="text-gray-700">
        Below are more details about some of our policies that we have
        implemented to keep Tinder more safe.
      </p>

      <h2 className="text-2xl font-bold mb-2">Dedication to Inclusion</h2>
      <p className="text-gray-700">
        No matter your gender identity, sexual orientation, ethnicity, or
        background, Cupidy welcomes you. We strive to make Cupidy the most
        inclusive platform for meeting new people and have worked closely with
        organizations around the world to constantly improve our practices.
        Today, we offer users more than 50 gender identities in countries around
        the world and 9 sexual orientations.
      </p>

      <h2 className="text-2xl font-bold mb-2">Underage Usage</h2>
      <p className="text-gray-700">
        Cupidy is for users 18+, and we work hard to vigilantly maintain an
        adults only community. We utilize a network of industry-leading
        automated and manual moderation and review tools, systems and processes
        - and invest significant resources - to prevent and remove minors from
        our app.
      </p>
      <p className="text-gray-700">
        These tools may include automatic scans of profiles for red-flag
        language and images, manual reviews of suspicious profiles, activity,
        and user generated reports, as well as blocking email addresses, phone
        numbers and other identifiers associated with underage users trying to
        circumvent these restrictions. We also depend on our users to report any
        profiles that may depict a minor, so that we can investigate and remove,
        accordingly.
      </p>
      <p className="text-gray-700">We do not want minors on Cupidy. Period.</p>

      <h2 className="text-2xl font-bold mb-2">Solicitation/Prostitution</h2>
      <p className="text-gray-700">
        Solicitation of any kind - whether attempting to buy or sell - is
        against our Terms of Use. If a user encounters a profile violating our
        terms, we encourage them to report via the self-reporting tool featured
        on all Cupidy profiles or online. Making such a report allows our
        dedicated community team to take appropriate measures, which may include
        removing the profile or banning the user.
      </p>

      <h2 className="text-2xl font-bold mb-2" id='illegal'>Illegal Substances</h2>
      <p className="text-gray-700">
        Profiles (or Cupidy users) promoting illegal substances violate our
        Terms of Use and we have a system in place to remove these profiles from
        the app. If a user encounters a profile violating our terms, we
        encourage them to report it in within the app.
      </p>
    </motion.div>
  )
}

export default About