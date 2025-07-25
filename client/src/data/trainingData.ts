export interface QuizQuestion {
  question: string;
  choices: string[];
  correctAnswer: string;
}

export interface TrainingModule {
  id: string;
  title: string;
  videoUrl: string;
  transcript: string;
  readingMaterial: string;
  quiz: QuizQuestion[];
  duration: string;
}

export interface TrainingData {
  core: TrainingModule[];
  departmental: {
    sales: TrainingModule[];
    ops: TrainingModule[];
    marketing: TrainingModule[];
    finance: TrainingModule[];
    manufacturing: TrainingModule[];
  };
  hr: TrainingModule[];
}

export const trainingData: TrainingData = {
  core: [
    {
      id: "core-1",
      title: "Welcome to SteamPRO",
      videoUrl: "https://youtu.be/Q1C4k-EUrnI",
      transcript: "Welcome to SteamPRO! We're a bath-tech startup revolutionizing luxury bathing experiences...",
      readingMaterial: `
        <h3>About SteamPRO</h3>
        <p>Welcome to SteamPRO, India's premier bath-tech startup revolutionizing the way people experience luxury bathing. Founded in 2020, we've quickly established ourselves as leaders in innovative steam solutions and premium bathroom fixtures.</p>
        
        <h4>Our Mission</h4>
        <p>To transform every bathroom into a personal wellness sanctuary, combining cutting-edge technology with timeless design principles.</p>
        
        <h4>Company Values</h4>
        <ul>
          <li><strong>Innovation:</strong> We continuously push the boundaries of bath technology</li>
          <li><strong>Quality:</strong> Every product meets the highest standards of craftsmanship</li>
          <li><strong>Customer Focus:</strong> Our customers' satisfaction drives everything we do</li>
          <li><strong>Sustainability:</strong> We're committed to environmentally responsible practices</li>
        </ul>
        
        <h4>Our Products</h4>
        <p>SteamPRO offers a comprehensive range of premium bath solutions including steam generators, luxury shower systems, and smart bathroom fixtures. Our products are designed and manufactured with precision in our state-of-the-art facilities.</p>
      `,
      quiz: [
        {
          question: "When was SteamPRO founded?",
          choices: ["2018", "2020", "2022"],
          correctAnswer: "2020"
        },
        {
          question: "What is SteamPRO's primary mission?",
          choices: [
            "To sell bathroom fixtures",
            "To transform bathrooms into wellness sanctuaries",
            "To compete with other startups"
          ],
          correctAnswer: "To transform bathrooms into wellness sanctuaries"
        },
        {
          question: "Which of these is NOT a SteamPRO value?",
          choices: ["Innovation", "Speed", "Quality"],
          correctAnswer: "Speed"
        }
      ],
      duration: "15 minutes"
    },
    {
      id: "core-2",
      title: "Company Values & Culture",
      videoUrl: "https://youtu.be/Q1C4k-EUrnI",
      transcript: "Our company values form the foundation of everything we do...",
      readingMaterial: `
        <h3>SteamPRO Values & Culture</h3>
        <p>At SteamPRO, our values aren't just words on a wall – they're the principles that guide every decision we make.</p>
        
        <h4>Innovation</h4>
        <p>We embrace cutting-edge technology and creative solutions to solve complex challenges in the bath industry.</p>
        
        <h4>Quality</h4>
        <p>Excellence is non-negotiable. Every product, service, and interaction reflects our commitment to the highest standards.</p>
        
        <h4>Customer Focus</h4>
        <p>Our customers are at the heart of everything we do. We listen, learn, and adapt to exceed their expectations.</p>
        
        <h4>Sustainability</h4>
        <p>We're committed to environmental responsibility and sustainable business practices for future generations.</p>
      `,
      quiz: [
        {
          question: "What guides every decision at SteamPRO?",
          choices: ["Profit margins", "Company values", "Market trends"],
          correctAnswer: "Company values"
        },
        {
          question: "According to SteamPRO, excellence is:",
          choices: ["Optional", "Negotiable", "Non-negotiable"],
          correctAnswer: "Non-negotiable"
        },
        {
          question: "Who is at the heart of everything SteamPRO does?",
          choices: ["Shareholders", "Customers", "Competitors"],
          correctAnswer: "Customers"
        }
      ],
      duration: "20 minutes"
    },
    {
      id: "core-3",
      title: "Safety Guidelines",
      videoUrl: "https://youtu.be/Q1C4k-EUrnI",
      transcript: "Safety is our top priority at SteamPRO...",
      readingMaterial: `
        <h3>Workplace Safety at SteamPRO</h3>
        <p>Safety is our highest priority. Every team member has the responsibility to maintain a safe working environment.</p>
        
        <h4>General Safety Rules</h4>
        <ul>
          <li>Report any unsafe conditions immediately</li>
          <li>Use proper personal protective equipment (PPE)</li>
          <li>Follow all safety procedures and protocols</li>
          <li>Keep work areas clean and organized</li>
        </ul>
        
        <h4>Emergency Procedures</h4>
        <p>In case of emergency, know the location of exits, fire extinguishers, and first aid stations. Report all incidents to your supervisor immediately.</p>
        
        <h4>Equipment Safety</h4>
        <p>Only operate equipment you're trained to use. Regular maintenance and inspection schedules must be followed.</p>
      `,
      quiz: [
        {
          question: "What is SteamPRO's highest priority?",
          choices: ["Productivity", "Safety", "Sales"],
          correctAnswer: "Safety"
        },
        {
          question: "Who is responsible for maintaining a safe working environment?",
          choices: ["Only supervisors", "Only safety officers", "Every team member"],
          correctAnswer: "Every team member"
        },
        {
          question: "When should unsafe conditions be reported?",
          choices: ["At the end of the day", "During breaks", "Immediately"],
          correctAnswer: "Immediately"
        }
      ],
      duration: "25 minutes"
    },
    {
      id: "core-4",
      title: "Mission and Vision",
      videoUrl: "https://youtu.be/Q1C4k-EUrnI",
      transcript: "Our mission and vision guide our path forward as we transform the bath industry...",
      readingMaterial: `
        <h3>SteamPRO Mission and Vision</h3>
        <p>Our mission and vision statements define who we are and where we're going as a company.</p>
        
        <h4>Our Mission</h4>
        <p><strong>"To transform every bathroom into a personal wellness sanctuary, combining cutting-edge technology with timeless design principles."</strong></p>
        <p>This mission drives every product we develop, every service we provide, and every interaction we have with customers. We believe that the bathroom should be more than just a functional space – it should be a place of relaxation, rejuvenation, and personal care.</p>
        
        <h4>Our Vision</h4>
        <p><strong>"To be the global leader in innovative bath technology, setting new standards for luxury, sustainability, and wellness in homes worldwide."</strong></p>
        <p>We envision a future where SteamPRO products are synonymous with excellence in bath technology. Our vision guides our long-term strategy and innovation roadmap.</p>
        
        <h4>How Mission and Vision Guide Our Work</h4>
        <ul>
          <li><strong>Product Development:</strong> Every new product must align with our mission to create wellness sanctuaries</li>
          <li><strong>Customer Service:</strong> We approach every customer interaction with the goal of transforming their bathing experience</li>
          <li><strong>Innovation:</strong> Our vision pushes us to develop cutting-edge solutions that set industry standards</li>
          <li><strong>Sustainability:</strong> Both our mission and vision emphasize responsible practices for the future</li>
        </ul>
        
        <h4>Living Our Mission Daily</h4>
        <p>As a SteamPRO team member, you play a crucial role in bringing our mission and vision to life. Every decision you make should contribute to transforming bathrooms into wellness sanctuaries and establishing SteamPRO as the global leader in bath technology.</p>
      `,
      quiz: [
        {
          question: "What is SteamPRO's mission?",
          choices: [
            "To sell premium bathroom fixtures",
            "To transform bathrooms into wellness sanctuaries",
            "To compete with international brands"
          ],
          correctAnswer: "To transform bathrooms into wellness sanctuaries"
        },
        {
          question: "According to SteamPRO's vision, what do we aim to be?",
          choices: [
            "A local bathroom supplier",
            "The global leader in innovative bath technology",
            "A traditional fixture manufacturer"
          ],
          correctAnswer: "The global leader in innovative bath technology"
        },
        {
          question: "How should team members use the mission and vision in their work?",
          choices: [
            "Only reference them during meetings",
            "Every decision should contribute to our mission and vision",
            "They're just for marketing purposes"
          ],
          correctAnswer: "Every decision should contribute to our mission and vision"
        }
      ],
      duration: "18 minutes"
    }
  ],
  departmental: {
    sales: [
      {
        id: "sales-1",
        title: "Sales Process & Methodology",
        videoUrl: "https://youtu.be/Q1C4k-EUrnI",
        transcript: "Our sales process is designed to understand customer needs and provide solutions...",
        readingMaterial: `
          <h3>SteamPRO Sales Process</h3>
          <p>Our structured sales approach ensures consistent, high-quality customer experiences.</p>
          
          <h4>Discovery Phase</h4>
          <p>Understanding customer needs, budget, timeline, and decision-making process.</p>
          
          <h4>Solution Design</h4>
          <p>Matching customer requirements with our product offerings for optimal solutions.</p>
          
          <h4>Proposal & Negotiation</h4>
          <p>Presenting compelling proposals and negotiating terms that benefit both parties.</p>
          
          <h4>Closing & Follow-up</h4>
          <p>Securing agreements and ensuring smooth project handover to delivery teams.</p>
        `,
        quiz: [
          {
            question: "What's the first phase of the SteamPRO sales process?",
            choices: ["Closing", "Discovery", "Negotiation"],
            correctAnswer: "Discovery"
          },
          {
            question: "What should proposals aim to be?",
            choices: ["Quick", "Cheap", "Compelling"],
            correctAnswer: "Compelling"
          },
          {
            question: "After closing, what's the next step?",
            choices: ["Move to next customer", "Follow-up and handover", "Celebrate"],
            correctAnswer: "Follow-up and handover"
          }
        ],
        duration: "30 minutes"
      },
      {
        id: "sales-2",
        title: "Handling Customer Objections",
        videoUrl: "https://youtu.be/Q1C4k-EUrnI",
        transcript: "Customer objections are opportunities to provide clarity and build trust...",
        readingMaterial: `
          <h3>Objection Handling Framework</h3>
          <p>Objections are natural parts of the sales process and opportunities to demonstrate value.</p>
          
          <h4>Listen Actively</h4>
          <p>Understand the real concern behind the objection. Ask clarifying questions.</p>
          
          <h4>Acknowledge & Empathize</h4>
          <p>Show understanding and validate their concerns before responding.</p>
          
          <h4>Address with Evidence</h4>
          <p>Provide specific examples, case studies, or data to overcome objections.</p>
          
          <h4>Confirm Resolution</h4>
          <p>Ensure the customer is satisfied with your response before moving forward.</p>
        `,
        quiz: [
          {
            question: "How should objections be viewed?",
            choices: ["As obstacles", "As opportunities", "As rejections"],
            correctAnswer: "As opportunities"
          },
          {
            question: "What's the first step in handling objections?",
            choices: ["Argue back", "Listen actively", "Change the subject"],
            correctAnswer: "Listen actively"
          },
          {
            question: "What should you do after addressing an objection?",
            choices: ["Move on quickly", "Confirm resolution", "Ask for order"],
            correctAnswer: "Confirm resolution"
          }
        ],
        duration: "25 minutes"
      }
    ],
    ops: [
      {
        id: "ops-1",
        title: "Operations Excellence",
        videoUrl: "https://youtu.be/Q1C4k-EUrnI",
        transcript: "Operations excellence drives our ability to deliver quality products consistently...",
        readingMaterial: `
          <h3>Operations Excellence Framework</h3>
          <p>Our operations team ensures efficient, quality-driven processes across all functions.</p>
          
          <h4>Process Optimization</h4>
          <p>Continuously improving workflows for maximum efficiency and quality output.</p>
          
          <h4>Quality Control</h4>
          <p>Implementing rigorous quality checks at every stage of production and delivery.</p>
          
          <h4>Supply Chain Management</h4>
          <p>Maintaining strong supplier relationships and inventory management systems.</p>
          
          <h4>Continuous Improvement</h4>
          <p>Regular analysis and enhancement of operational processes and outcomes.</p>
        `,
        quiz: [
          {
            question: "What drives SteamPRO's ability to deliver quality products?",
            choices: ["Operations excellence", "Marketing", "Sales"],
            correctAnswer: "Operations excellence"
          },
          {
            question: "When should quality checks be implemented?",
            choices: ["At the end", "At every stage", "Only when problems occur"],
            correctAnswer: "At every stage"
          },
          {
            question: "What approach does SteamPRO take to operational processes?",
            choices: ["Set and forget", "Continuous improvement", "Monthly reviews"],
            correctAnswer: "Continuous improvement"
          }
        ],
        duration: "35 minutes"
      }
    ],
    marketing: [
      {
        id: "marketing-1",
        title: "Brand Strategy & Positioning",
        videoUrl: "https://youtu.be/Q1C4k-EUrnI",
        transcript: "Our brand represents innovation, quality, and luxury in the bath industry...",
        readingMaterial: `
          <h3>SteamPRO Brand Strategy</h3>
          <p>Our brand positioning establishes SteamPRO as the premium choice in bath technology.</p>
          
          <h4>Brand Promise</h4>
          <p>Transforming ordinary bathrooms into extraordinary wellness experiences.</p>
          
          <h4>Target Audience</h4>
          <p>Affluent homeowners who value quality, innovation, and luxury in their living spaces.</p>
          
          <h4>Competitive Advantage</h4>
          <p>Cutting-edge technology combined with superior design and customer service.</p>
          
          <h4>Brand Voice</h4>
          <p>Professional, innovative, and approachable while maintaining premium positioning.</p>
        `,
        quiz: [
          {
            question: "What does SteamPRO's brand promise to do?",
            choices: [
              "Sell more products",
              "Transform bathrooms into wellness experiences",
              "Beat competitors"
            ],
            correctAnswer: "Transform bathrooms into wellness experiences"
          },
          {
            question: "Who is SteamPRO's target audience?",
            choices: [
              "Budget-conscious buyers",
              "Affluent homeowners valuing quality",
              "Commercial builders"
            ],
            correctAnswer: "Affluent homeowners valuing quality"
          },
          {
            question: "What combination gives SteamPRO its competitive advantage?",
            choices: [
              "Low price and fast delivery",
              "Technology, design, and customer service",
              "Marketing and sales"
            ],
            correctAnswer: "Technology, design, and customer service"
          }
        ],
        duration: "28 minutes"
      }
    ],
    finance: [
      {
        id: "finance-1",
        title: "Financial Planning & Analysis",
        videoUrl: "https://youtu.be/Q1C4k-EUrnI",
        transcript: "Financial planning drives strategic decision-making at SteamPRO...",
        readingMaterial: `
          <h3>Financial Excellence at SteamPRO</h3>
          <p>Sound financial planning and analysis support our growth and sustainability goals.</p>
          
          <h4>Budget Planning</h4>
          <p>Comprehensive planning process involving all departments for accurate forecasting.</p>
          
          <h4>Financial Controls</h4>
          <p>Robust controls and approval processes to ensure financial integrity.</p>
          
          <h4>Performance Analysis</h4>
          <p>Regular analysis of financial performance against targets and industry benchmarks.</p>
          
          <h4>Strategic Support</h4>
          <p>Providing financial insights to support strategic business decisions.</p>
        `,
        quiz: [
          {
            question: "What drives strategic decision-making at SteamPRO?",
            choices: ["Financial planning", "Market trends", "Competitor actions"],
            correctAnswer: "Financial planning"
          },
          {
            question: "Who should be involved in the budget planning process?",
            choices: ["Only finance team", "All departments", "Only senior management"],
            correctAnswer: "All departments"
          },
          {
            question: "How often should performance analysis be conducted?",
            choices: ["Annually", "Regularly", "Only when problems occur"],
            correctAnswer: "Regularly"
          }
        ],
        duration: "32 minutes"
      }
    ],
    manufacturing: [
      {
        id: "manufacturing-1",
        title: "Production Excellence",
        videoUrl: "https://youtu.be/Q1C4k-EUrnI",
        transcript: "Manufacturing excellence ensures quality products that meet customer expectations...",
        readingMaterial: `
          <h3>Manufacturing Excellence Standards</h3>
          <p>Our manufacturing processes are designed for quality, efficiency, and safety.</p>
          
          <h4>Quality Systems</h4>
          <p>Implementing ISO-standard quality management systems across all production lines.</p>
          
          <h4>Lean Manufacturing</h4>
          <p>Eliminating waste and optimizing efficiency while maintaining quality standards.</p>
          
          <h4>Safety Protocols</h4>
          <p>Comprehensive safety procedures to protect all team members and equipment.</p>
          
          <h4>Continuous Improvement</h4>
          <p>Regular process reviews and improvements based on data and feedback.</p>
        `,
        quiz: [
          {
            question: "What ensures quality products that meet customer expectations?",
            choices: ["Marketing", "Manufacturing excellence", "Sales process"],
            correctAnswer: "Manufacturing excellence"
          },
          {
            question: "What standard quality management systems does SteamPRO implement?",
            choices: ["Custom systems", "ISO-standard systems", "Industry-basic systems"],
            correctAnswer: "ISO-standard systems"
          },
          {
            question: "What is the goal of lean manufacturing?",
            choices: [
              "Reduce costs only",
              "Eliminate waste while maintaining quality",
              "Speed up production"
            ],
            correctAnswer: "Eliminate waste while maintaining quality"
          }
        ],
        duration: "40 minutes"
      }
    ]
  },
  hr: [
    {
      id: "hr-1",
      title: "Code of Conduct",
      videoUrl: "https://youtu.be/Q1C4k-EUrnI",
      transcript: "Our code of conduct establishes the behavioral standards expected from all employees...",
      readingMaterial: `
        <h3>SteamPRO Code of Conduct</h3>
        <p>Our code of conduct reflects our values and establishes clear expectations for professional behavior.</p>
        
        <h4>Professional Integrity</h4>
        <p>Acting with honesty, transparency, and ethical behavior in all business dealings.</p>
        
        <h4>Respect & Inclusion</h4>
        <p>Treating all colleagues, customers, and partners with dignity and respect regardless of background.</p>
        
        <h4>Confidentiality</h4>
        <p>Protecting company and customer information from unauthorized disclosure.</p>
        
        <h4>Conflict of Interest</h4>
        <p>Avoiding situations where personal interests conflict with company interests.</p>
        
        <h4>Reporting Violations</h4>
        <p>Reporting any violations of this code through appropriate channels without fear of retaliation.</p>
      `,
      quiz: [
        {
          question: "What does the code of conduct establish?",
          choices: [
            "Company profits",
            "Behavioral standards",
            "Product specifications"
          ],
          correctAnswer: "Behavioral standards"
        },
        {
          question: "How should all people be treated according to the code?",
          choices: [
            "Based on their position",
            "With dignity and respect",
            "According to their contribution"
          ],
          correctAnswer: "With dignity and respect"
        },
        {
          question: "What should you do if you witness a code violation?",
          choices: [
            "Ignore it",
            "Report it through appropriate channels",
            "Handle it personally"
          ],
          correctAnswer: "Report it through appropriate channels"
        }
      ],
      duration: "20 minutes"
    },
    {
      id: "hr-2",
      title: "Diversity & Inclusion",
      videoUrl: "https://youtu.be/Q1C4k-EUrnI",
      transcript: "Diversity and inclusion are fundamental to our success and innovation...",
      readingMaterial: `
        <h3>Diversity & Inclusion at SteamPRO</h3>
        <p>We believe diverse perspectives drive innovation and create better outcomes for everyone.</p>
        
        <h4>Our Commitment</h4>
        <p>Creating an inclusive environment where everyone can contribute their best work regardless of background.</p>
        
        <h4>Diverse Hiring</h4>
        <p>Actively seeking diverse candidates and eliminating bias from our hiring processes.</p>
        
        <h4>Inclusive Culture</h4>
        <p>Fostering a culture where different perspectives are valued and everyone feels they belong.</p>
        
        <h4>Equal Opportunities</h4>
        <p>Ensuring all employees have equal access to development, advancement, and recognition opportunities.</p>
        
        <h4>Bias Awareness</h4>
        <p>Regular training to help everyone recognize and address unconscious bias.</p>
      `,
      quiz: [
        {
          question: "What do diverse perspectives drive at SteamPRO?",
          choices: ["Competition", "Innovation", "Conflict"],
          correctAnswer: "Innovation"
        },
        {
          question: "What should SteamPRO actively seek in hiring?",
          choices: ["Similar backgrounds", "Diverse candidates", "Local candidates only"],
          correctAnswer: "Diverse candidates"
        },
        {
          question: "What ensures equal access to opportunities?",
          choices: [
            "Seniority systems",
            "Equal opportunity practices",
            "Performance only"
          ],
          correctAnswer: "Equal opportunity practices"
        }
      ],
      duration: "30 minutes"
    },
    {
      id: "hr-3",
      title: "Benefits Overview",
      videoUrl: "https://youtu.be/Q1C4k-EUrnI",
      transcript: "Our comprehensive benefits package supports your health, wellbeing, and financial security...",
      readingMaterial: `
        <h3>SteamPRO Employee Benefits</h3>
        <p>We provide comprehensive benefits to support your personal and professional wellbeing.</p>
        
        <h4>Health & Medical</h4>
        <p>Comprehensive health insurance coverage for you and your family, including dental and vision.</p>
        
        <h4>Retirement Planning</h4>
        <p>Company-matched retirement savings plans to help secure your financial future.</p>
        
        <h4>Time Off</h4>
        <p>Generous paid time off, holidays, and flexible work arrangements to support work-life balance.</p>
        
        <h4>Professional Development</h4>
        <p>Training, education assistance, and career development opportunities to help you grow.</p>
        
        <h4>Wellness Programs</h4>
        <p>On-site fitness facilities, wellness programs, and mental health support resources.</p>
        
        <h4>Additional Perks</h4>
        <p>Employee discounts, recognition programs, and team building activities.</p>
      `,
      quiz: [
        {
          question: "What does SteamPRO's benefits package support?",
          choices: [
            "Only health needs",
            "Health, wellbeing, and financial security",
            "Only financial needs"
          ],
          correctAnswer: "Health, wellbeing, and financial security"
        },
        {
          question: "What helps secure your financial future?",
          choices: [
            "Health insurance",
            "Company-matched retirement plans",
            "Time off policies"
          ],
          correctAnswer: "Company-matched retirement plans"
        },
        {
          question: "What development opportunities does SteamPRO provide?",
          choices: [
            "Only internal training",
            "Training, education assistance, and career development",
            "Only on-the-job experience"
          ],
          correctAnswer: "Training, education assistance, and career development"
        }
      ],
      duration: "15 minutes"
    }
  ]
};
