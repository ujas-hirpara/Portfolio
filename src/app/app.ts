import { Component, OnInit, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit, AfterViewInit, OnDestroy {
  mobileMenuOpen = false;
  private observer?: IntersectionObserver;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  skills = [
    { name: 'Angular', icon: '⚡' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Express.js', icon: '🚀' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'React.js', icon: '⚛️' },
    { name: 'AWS', icon: '☁️' },
    { name: 'MySQL', icon: '🗄️' }
  ];

  tools = [
    { name: 'Postman', icon: '📬' },
    { name: 'Git', icon: '🔀' },
    { name: 'Jira', icon: '📋' },
    { name: 'VS Code', icon: '💻' }
  ];

  experience = [
    {
      title: 'MEAN Stack Developer',
      company: 'Innovate MR, LLC',
      period: 'February 2023 - Present',
      responsibilities: [
        'Developed and managed web applications using Angular and Node.js',
        'Implemented user-friendly interfaces with HTML, CSS, and JavaScript',
        'Developed back-end services with Node.js, Express, and managed databases using MongoDB',
        'Experienced in utilizing AWS services including EC2, S3, Lambda, SQS and Cognito',
        'Troubleshoot and resolved complex technical issues to ensure optimal performance and security'
      ]
    }
  ];

  projects = [
    {
      name: 'PointClub',
      description: 'A full-stack rewards-based web application enabling users to earn and redeem points through platform activities',
      technologies: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'AWS EC2', 'S3'],
      features: [
        'Scalable REST APIs for users, transactions, and reward systems',
        'Dynamic and responsive UI components in Angular',
        'Secure login, user authentication, and role-based access controls',
        'Activity module for completing tasks, surveys, or referrals to earn points'
      ]
    },
    {
      name: 'Business Insights Hub',
      description: 'An online market research platform designed for professional businesspeople to participate in surveys and research activities',
      technologies: ['Angular', 'Node.js', 'MongoDB'],
      features: [
        'User Registration & Authentication for professionals',
        'Survey Participation system with tailored surveys',
        'User-friendly Dashboard displaying available surveys and participation history',
        'Responsive Design optimized for seamless use across devices'
      ]
    },
    {
      name: 'Edge by InnovateMR',
      description: 'Proprietary project management and analytics platform designed to streamline and enhance market research operations',
      technologies: ['Angular', 'Node.js', 'MongoDB'],
      features: [
        'Different dashboards for Executives, Team Leads, and Project Managers',
        'Automated reports and alerts to reduce manual work',
        'Clean and responsive user interface using Angular',
        'Performance tracking and project progress monitoring'
      ]
    }
  ];

  education = [
    {
      degree: 'Bachelor of Engineering - C.E.',
      institution: 'SAL Institute Of Technology And Engineering Research',
      location: 'Ahmedabad'
    },
    {
      degree: 'HSC',
      institution: 'Oxford School Of Science',
      location: 'Amreli'
    }
  ];

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    // Prevent body scroll when menu is open
    if (isPlatformBrowser(this.platformId)) {
      if (this.mobileMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
  }

  scrollToSection(sectionId: string) {
    // Close mobile menu if open
    if (this.mobileMenuOpen) {
      this.closeMobileMenu();
    }
    
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    
    // Small delay to ensure menu closes before scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }

  ngOnInit() {
    // Add scroll effect to navbar
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('scroll', this.handleScroll);
    }
  }

  ngAfterViewInit() {
    // Setup intersection observer for scroll animations
    if (isPlatformBrowser(this.platformId)) {
      // Immediately show all sections to prevent blank page
      this.showAllSections();
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        this.setupScrollAnimations();
        // Fallback: show elements that are already in viewport
        this.showVisibleElements();
      }, 100);
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('scroll', this.handleScroll);
      if (this.observer) {
        this.observer.disconnect();
      }
    }
  }

  private handleScroll = () => {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  };

  private setupScrollAnimations() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const options = {
      threshold: 0.05,
      rootMargin: '0px 0px -30px 0px'
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          // Stop observing once animated
          this.observer?.unobserve(entry.target);
        }
      });
    }, options);

    // Observe all sections and cards
    const elementsToAnimate = document.querySelectorAll(
      'section, .skill-card, .tool-card, .experience-card, .project-card, .contact-item'
    );
    elementsToAnimate.forEach(el => this.observer?.observe(el));
  }

  private showAllSections() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    // Immediately show all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.add('animate-in');
    });
  }

  private showVisibleElements() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const elementsToAnimate = document.querySelectorAll(
      '.skill-card, .tool-card, .experience-card, .project-card, .contact-item'
    );

    elementsToAnimate.forEach(el => {
      const rect = el.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      if (isVisible && !el.classList.contains('animate-in')) {
        el.classList.add('animate-in');
      }
    });
  }
}
