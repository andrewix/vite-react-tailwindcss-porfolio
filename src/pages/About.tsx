import React from 'react';
import { BookOpen, Brain, Award, Briefcase } from 'lucide-react';

function About() {
  const skills = [
    {
      category: "Technical Skills",
      items: ["Python", "SQL", "Html", "Css", "JavaScript", "Git/Github"]
    },
    {
      category: "Data Analysis",
      items: ["Pandas", "NumPy", "Data Visualization", "Statistical Analysis", "Excel", "Power BI"]
    },
    {
      category: "Soft Skills",
      items: ["Problem Solving", "Communication", "Team Collaboration", "Time Management", "Quick Learner"]
    }
  ];

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-16 text-center" style={{ color: '#333333' }}>
          About Me
        </h1>

        <div className="space-y-16">
          {/* Journey Section */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold" style={{ color: '#333333' }}>
                My Journey
              </h2>
              <p className="leading-relaxed" style={{ color: '#333333' }}>
                Hi, my name is Andrew and I am a highly ambitious, self-motivated, and
                driven individual who is passionate about data and programming.

              </p>

              <p> I graduated from Saint Mary's University, Halifax in 2024 with a BS in Computing and Information System.
                As a recent graduate, I'm interested in combining analytical thinking with
                technical skills to solve complex problems.
              </p>

              <p className="leading-relaxed" style={{ color: '#333333' }}>
                I am always seeking new experiences and challenges to grow my skills and knowledge.
                Currently seeking opportunities to contribute to meaningful projects and continue growing
                professionally.
              </p>

            
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: BookOpen, title: "Education", subtitle: "Bachelor's in Computing and Information System" },
                { icon: Briefcase, title: "Experience", subtitle: "two Internships" },
                { icon: Award, title: "Certifications", subtitle: "IBM Data Analyst Professional Certificate & Microsoft Azure AI-900 Certificate" },
                { icon: Brain, title: "Focus Areas", subtitle: "Programming & Data Analysis" }
              ].map(({ icon: Icon, title, subtitle }, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg shadow-sm border transition-transform duration-200 hover:scale-105"
                  style={{ borderColor: '#007BFF' }}
                >
                  <Icon className="w-8 h-8 mb-3" style={{ color: '#007BFF' }} />
                  <h3 className="font-semibold" style={{ color: '#333333' }}>{title}</h3>
                  <p className="text-sm" style={{ color: '#333333' }}>{subtitle}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold" style={{ color: '#333333' }}>
              Tech Stack and Skills
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((skillSet, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg shadow-sm border space-y-4"
                  style={{ borderColor: '#007BFF' }}
                >
                  <h3 className="text-xl font-semibold" style={{ color: '#333333' }}>
                    {skillSet.category}
                  </h3>
                  <ul className="space-y-2">
                    {skillSet.items.map((skill, skillIndex) => (
                      <li
                        key={skillIndex}
                        className="flex items-center"
                        style={{ color: '#333333' }}
                      >
                        <span
                          className="w-2 h-2 rounded-full mr-2"
                          style={{ backgroundColor: '#007BFF' }}
                        ></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About
