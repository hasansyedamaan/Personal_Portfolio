export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Publications", href: "#publications" },
  { name: "Contact", href: "#contact" },
];

export const personalInfo = {
  name: "Syed Amaan Hasan",
  role: "AI & Machine Learning Scholar | Software Engineer",
  email: "hasansyedamaan@gmail.com",
  phone: "+91 9634620272",
  github: "https://github.com/beckkenstschaft",
  linkedin: "https://www.linkedin.com/in/syed-amaan-hasan-497898212/",
  resumeUrl: "https://drive.google.com/file/d/1QdKKRDObTSk5TwLT3ZKcu_7SxiLIMAAs/view?usp=sharing",
  bio: "I am an M.Tech scholar in AI & Machine Learning at BITS Pilani and a B.Tech CSE graduate from Graphic Era University. Throughout my academic and professional journey, I have focused on applied artificial intelligence, machine learning, and scalable software systems.\n\nAt NVIDIA, I worked as an Associate Prompt Engineer, where I optimized multimodal large language models (LLMs). By engineering over 500 structured prompts and developing models through RLHF, I helped improve response accuracy by 25% and significantly reduced hallucinated outputs. Prior to this, as a Research Software Engineer at Tula’s Institute, I led government-funded UCOST projects, achieving 92% accuracy in land-cover classification using deep learning on AWS and building automated workflows that reduced data processing times by 40%.\n\nBeyond industry work, I am passionate about research and mentorship. I currently serve as a Lecturer and Assistant Incubation Manager at Shivalik University, teaching Neural Networks and mentoring students. My independent research includes work on Vision-Language Models (VLMs), such as developing a cross-modal attention verification framework (X-MAV), and I have secured multiple patents and published papers in the field. I am driven by the goal of building practical, reliable AI solutions that solve real-world problems.",
};

export const skills = {
  languages: ["Python", "Java", "JavaScript", "SQL", "C++", "C", "PHP"],
  ai_ml: ["Deep Learning", "Machine Learning", "NLP", "LLMs", "Fine-tuning", "RAG Pipelines", "AI Agents", "Prompt Engineering", "MLOps", "Causal Inference", "Transformer Architectures", "Vision Encoders (ViT, CLIP)", "RLHF"],
  evaluation: ["Attention Visualization & Probing", "Grad-CAM", "Mechanistic Interpretability", "Cross-Modal Consistency Verification", "Hallucination Benchmarks", "CHAIR Metric"],
  frameworks_cv: ["PyTorch", "TensorFlow", "scikit-learn", "Hugging Face Transformers", "PEFT", "Weights & Biases", "NVIDIA FoundationPose", "ONNX", "TensorRT"],
  backend_web: ["Node.js", "Express.js", "REST APIs", "MongoDB", "React", "Distributed Systems", "HTML5", "CSS3", "Bootstrap"],
  cloud_devops: ["AWS", "Docker", "Kubernetes", "Git", "GitHub", "LangChain", "LangGraph", "Jupyter Notebook", "Postman", "Automation"]
};

export const projects = [
  {
    title: "X-MAV: Cross-Modal Attention Verification",
    stack: ["Qwen2-VL", "PyTorch", "Transformers", "Python"],
    link: "#",
    description: "Designed a framework to detect and correct hallucinated outputs in Vision-Language Models by cross-verifying attention alignment between visual and textual modalities."
  },
  {
    title: "Full-Stack ATS Resume Tracker",
    stack: ["NLP", "LLMs", "RAG", "React", "Node.js"],
    link: "https://github.com/beckkenstschaft/Full-Stack-ATS-Resume-Tracker",
    description: "Built an ATS scoring system integrating LLMs, RAG pipelines, and AI agents for intelligent cover letter generation, achieving 88% accuracy. Designed causal inference-driven recommendation logic."
  },
  {
    title: "Attention Intervention Module for VLMs",
    stack: ["PyTorch", "Deep Learning", "Python"],
    link: "#",
    description: "Designing a novel intervention module that directly modifies attention distributions in VLMs to reduce hallucinated output."
  },
  {
    title: "Full-Stack File Sharing Platform",
    stack: ["AWS", "Kubernetes", "Node.js", "React"],
    link: "https://github.com/beckkenstschaft/Full-Stack_File_Sharing_Application",
    description: "Architected a secure platform supporting 100+ concurrent users with load balancing across distributed systems on AWS."
  },
  {
    title: "6D Pose Estimation Pipeline",
    stack: ["NVIDIA FoundationPose", "ONNX", "TensorRT", "PyTorch"],
    link: "#",
    description: "Built an object pose estimation pipeline evaluated on LINEMOD. Optimised inference to TensorRT (FP16), achieving a 4.5x speedup."
  },
  {
    title: "Realtime Sign Language Detection Engine",
    stack: ["DETR", "Transformers", "Python", "Hardware Integration"],
    link: "#",
    description: "Built a realtime sign language detection and translation engine with TTS feedback using a transformer-based DETR architecture. Incorporated into a smart glove to assist individuals in public spaces."
  }
];

export const experience = [
  {
    role: "Lecturer & Assistant Incubation Manager",
    company: "Shivalik University",
    date: "Mar 2026 - Present",
    logo: "/logos/shivalik-removebg-preview (1).png",
    desc: "Delivered lectures and lab sessions for Neural Networks and AI/ML. Mentored students on technical problem-solving and organized national-level hackathons to promote research and innovation."
  },
  {
    role: "Associate Prompt Engineer",
    company: "NVIDIA",
    date: "Jan 2026 - Mar 2026",
    logo: "/logos/nvidia-removebg-preview.png",
    desc: "Engineered 500+ structured prompts for multimodal LLMs. Improved accuracy by 25% and reduced hallucinations. Developed LLMs through RLHF, generating 10,000+ training samples."
  },
  {
    role: "Research Software Engineer",
    company: "Tula's Institute / Tulas University",
    date: "Feb 2025 - Jan 2026",
    logo: "/logos/tulas-removebg-preview.png",
    desc: "Contributed to government-funded UCOST projects. Achieved 92% accuracy in land-cover classification using deep learning on AWS. Built automated reporting workflows, reducing time by 40%."
  }
];

export const education = [
  {
    degree: "M.Tech - AI & Machine Learning",
    school: "Birla Institute of Technology and Science (BITS), Pilani",
    date: "Jan 2026 - Present",
    logo: "/logos/bits-removebg-preview.png",
    desc: "Advanced studies in AI and ML focusing on applied research, deep learning architectures, and intelligent systems."
  },
  {
    degree: "B.Tech - Computer Science and Engineering",
    school: "Graphic Era University",
    date: "Sep 2021 - Jun 2025",
    logo: "/logos/geu-removebg-preview.png",
    desc: "Achieved a CGPA of 8.26 / 10.0. Comprehensive knowledge in software engineering, algorithms, and computational theory."
  }
];

export const publicationsAndPatents = [
  {
    title: "X-MAV: Cross-Modal Attention Verification for Hallucination Detection in Vision-Language Models",
    type: "Manuscript",
    publisher: "IEEE Format (7-page)",
    date: "2026"
  },
  {
    title: "Analysis and Prediction of Flood and Impact Estimation by Integrating CNN and LSTM Framework",
    type: "Published Paper",
    publisher: "Cineforum, Scopus Indexed, Volume 66, No. 2",
    date: "2025"
  },
  {
    title: "AI-Based Sunglass for Visually Impaired",
    type: "Granted Patent",
    publisher: "Patent No. 491835-001",
    date: "2025"
  },
  {
    title: "Data Processing Device for Fashion and Style Recommendation",
    type: "Granted Patent",
    publisher: "Patent No. 503276-001",
    date: "2025"
  }
];

export const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    icon: "aws"
  }
];
