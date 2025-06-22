// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-animation').forEach(el => {
    observer.observe(el);
});

// Header background change on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(15, 32, 39, 0.98)';
    } else {
        header.style.background = 'rgba(30, 60, 114, 0.95)';
    }
});

// AI Chat Demo with intelligent responses
const chatInterface = document.getElementById('chatInterface');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

// AI Knowledge Base
const aiKnowledge = {
    greetings: {
        keywords: ['hello', 'hi', 'hey', 'good morning', 'good evening', 'namaste'],
        responses: [
            "Hello! I'm your AI assistant. How can I help you today?",
            "Hi there! What would you like to know about AI or our services?",
            "Hello! I'm here to answer your questions about artificial intelligence."
        ]
    },
    ai_general: {
        keywords: ['what is ai', 'artificial intelligence', 'ai definition', 'ai meaning'],
        responses: [
            "Artificial Intelligence (AI) is the simulation of human intelligence in machines that are programmed to think and learn like humans. It includes machine learning, deep learning, and neural networks.",
            "AI is a branch of computer science that aims to create intelligent machines capable of performing tasks that typically require human intelligence, such as visual perception, speech recognition, and decision-making."
        ]
    },
    machine_learning: {
        keywords: ['machine learning', 'ml', 'algorithms', 'data training'],
        responses: [
            "Machine Learning is a subset of AI that enables systems to automatically learn and improve from experience without being explicitly programmed. It uses algorithms to identify patterns in data.",
            "ML algorithms can be supervised (trained on labeled data), unsupervised (finding patterns in unlabeled data), or reinforcement learning (learning through trial and error)."
        ]
    },
    services: {
        keywords: ['services', 'what do you offer', 'solutions', 'help business'],
        responses: [
            "We offer Machine Learning, Natural Language Processing, Computer Vision, Predictive Analytics, AI Automation, and Data Intelligence solutions to help businesses transform digitally.",
            "Our AI services include custom chatbots, image recognition systems, predictive models, process automation, and intelligent data analysis tailored to your business needs."
        ]
    },
    pricing: {
        keywords: ['price', 'cost', 'pricing', 'how much', 'expensive'],
        responses: [
            "Our pricing depends on the complexity and scope of your AI project. We offer flexible packages starting from ₹50,000 for basic solutions. Contact us for a customized quote!",
            "We provide competitive pricing with custom solutions. Basic AI implementations start at ₹50,000, while enterprise solutions are priced based on requirements."
        ]
    },
    nlp: {
        keywords: ['nlp', 'natural language', 'text processing', 'chatbot'],
        responses: [
            "Natural Language Processing (NLP) helps computers understand, interpret, and generate human language. We use it for chatbots, sentiment analysis, and text classification.",
            "Our NLP solutions can analyze customer feedback, automate customer support, translate languages, and extract insights from text data."
        ]
    },
    computer_vision: {
        keywords: ['computer vision', 'image recognition', 'object detection', 'visual'],
        responses: [
            "Computer Vision enables machines to identify and analyze visual content. We develop solutions for object detection, facial recognition, quality control, and medical imaging.",
            "Our computer vision services include automated inspection systems, security surveillance, retail analytics, and medical image analysis."
        ]
    },
    contact: {
        keywords: ['contact', 'phone', 'email', 'reach', 'location'],
        responses: [
            "You can reach us at info@aihub.com or call +91 9876543210. We're located in Rajamahendravaram, Andhra Pradesh.",
            "Contact us via email at info@aihub.com or phone +91 9876543210. We're based in Rajamahendravaram, AP and serve clients across India."
        ]
    },
    help: {
        keywords: ['help', 'support', 'assistance', 'guide'],
        responses: [
            "I'm here to help! You can ask me about our AI services, pricing, technology explanations, or how AI can benefit your business.",
            "I can assist you with information about machine learning, computer vision, NLP, our services, pricing, and how to get started with AI for your business."
        ]
    }
};

function addMessage(message, isUser) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message ' + (isUser ? 'user-message' : 'ai-message');
    messageDiv.innerHTML = '<strong>' + (isUser ? 'You' : 'AI Assistant') + ':</strong> ' + message;
    chatInterface.appendChild(messageDiv);
    chatInterface.scrollTop = chatInterface.scrollHeight;
}

function getIntelligentResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    // Check each knowledge category
    for (const categoryName in aiKnowledge) {
        const category = aiKnowledge[categoryName];
        for (let i = 0; i < category.keywords.length; i++) {
            if (message.includes(category.keywords[i])) {
                const responses = category.responses;
                return responses[Math.floor(Math.random() * responses.length)];
            }
        }
    }
    
    // Default responses for unmatched queries
    const defaultResponses = [
        "I understand you're asking about '" + userMessage + "'. Could you please be more specific? I can help with AI services, machine learning, computer vision, NLP, pricing, and contact information.",
        "That's an interesting question! I'd be happy to help you with information about our AI solutions, services, or technology. Could you provide more details?",
        "I'm designed to help with AI-related questions. You can ask me about our services, technology explanations, pricing, or how AI can benefit your business.",
        "I can assist you with questions about artificial intelligence, machine learning, our services, pricing, and how to implement AI solutions for your business."
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

function sendMessage() {
    const message = messageInput.value.trim();
    if (message) {
        addMessage(message, true);
        messageInput.value = '';
        
        // Simulate AI thinking
        setTimeout(function() {
            addMessage(getIntelligentResponse(message), false);
        }, 1000 + Math.random() * 2000);
    }
}

sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Particle effect for hero section
function createParticles() {
    const hero = document.querySelector('.hero');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '2px';
        particle.style.height = '2px';
        particle.style.background = 'rgba(255, 255, 255, 0.5)';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = 'twinkle ' + (2 + Math.random() * 3) + 's infinite';
        hero.appendChild(particle);
    }
}

// Initialize particles
createParticles();

// Loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(function() {
        document.body.style.opacity = '1';
    }, 100);
});