# Selena Sat — Personal Portfolio

**Software builder by trade, designer by choice.**

Welcome to my personal portfolio! I'm Selena, an early-career software engineer interested in building thoughtful web experiences, full-stack applications, and cloud-based systems. This site showcases selected projects, my development approach, and my journey as an engineer.

🌐 **Live Portfolio:** [selena-sat.vercel.app](https://selena-sat.vercel.app)  
💼 **LinkedIn:** [linkedin.com/in/selenasat](https://linkedin.com/in/selenasat)  
🐙 **GitHub:** [github.com/selenasat](https://github.com/selenasat)

## About the Project

I built this portfolio to bring my software engineering work and design interests together in one place. It features responsive layouts, project case studies, subtle motion, and a contact form for professional inquiries.

## Tech Stack

- **Framework:** Next.js, React, TypeScript
- **Styling:** Tailwind CSS
- **Animation & Interaction:** Framer Motion, Lenis
- **Contact Form:** Next.js API route, Resend
- **Rate Limiting:** Upstash Redis
- **Deployment:** Vercel
- **Version Control:** Git and GitHub

## Featured Projects

### 1. Interactive Speech Therapy Web Application
A collaborative full-stack project designed to support interactive speech therapy exercises and clinician workflows.

- Contributed to frontend interactions and the connection between graph interactions and audio data.
- Worked on responsive interfaces and speech-related application features.
- Explored the integration of AI-assisted speech analysis.

**Technologies:** React, TypeScript, Node.js, Python, SQLite, Whisper

[View the Case Study](https://selena-sat.vercel.app/speech-therapy)

*This case study focuses on my contributions and design process while respecting the confidentiality of collaborative work.*

### 2. Terraform Serverless Document Processor
An event-driven cloud project exploring document-processing workflows and infrastructure as code.

- Uses AWS services to explore serverless processing and structured data storage.
- Uses Terraform to define and manage cloud infrastructure.
- Includes automated infrastructure validation and a GitHub Actions workflow.

**Technologies:** AWS, Lambda, S3, DynamoDB, SNS, Terraform, GitHub Actions

[View the Repository](https://github.com/selenasat/terraform-serverless-document-processor)

### 3. Persona Palette
A personal project exploring personalized fashion and beauty recommendations through image analysis.

- Explores color-season analysis and visual classification.
- Combines application development with computer vision and interface design.

**Technologies:** Python, Django, React, React Native, OpenCV, PostgreSQL

[View the Repository](https://github.com/selenasat/PersonaPaletteApp)

## Run Locally

### Prerequisites

- Node.js and npm
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/selenasat/selena-sat.git
   ```

2. Navigate to the project directory:

   ```bash
   cd selena-sat
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

The contact form requires environment variables for email delivery and rate limiting. Create a `.env.local` file in the project root and configure the following variables with your own credentials:

```env
RESEND_API_KEY=
CONTACT_EMAIL=
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
```

Keep your credentials private. Never commit `.env.local` or real API keys and tokens to GitHub.

## Deployment

The portfolio is deployed with Vercel and connected to this GitHub repository. Pushes to the configured deployment branch can trigger new deployments.

## Contact

Thanks for visiting! Feel free to explore my projects or connect with me.

- **LinkedIn:** [Selena Sat](https://linkedin.com/in/selenasat)
- **GitHub:** [selenasat](https://github.com/selenasat)
