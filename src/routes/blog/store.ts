import { writable } from 'svelte/store';
import type { BlogPost } from './types';

// Sample blog posts data
const initialPosts: BlogPost[] = [
	{
		id: '1',
		title: 'Getting Started with SvelteKit',
		date: '2025-02-25',
		excerpt: 'My journey with SvelteKit and how I built this portfolio site.',
		slug: 'getting-started-with-sveltekit',
		content: `
# Getting Started with SvelteKit

When I first started exploring modern frontend frameworks, I was immediately drawn to Svelte's elegant approach. Unlike React or Vue, Svelte shifts much of the work to compile time, resulting in highly optimized JavaScript that updates the DOM with minimal overhead.

## Why SvelteKit?

SvelteKit takes Svelte to the next level by providing:

- Server-side rendering out of the box
- File-based routing
- Seamless API integration
- Optimized builds with minimal configuration

## Building My Portfolio

For my portfolio site, I wanted something clean, fast, and easy to maintain. SvelteKit was the perfect choice.

### Project Structure

I organized my project with a clean separation of concerns:

- Components for reusable UI elements
- Routes for different pages
- Stores for state management

### Animation Integration

One of my favorite features is the custom animation system I built using Svelte's transition APIs. It provides a smooth, enjoyable user experience without bloated libraries.

## Conclusion

SvelteKit has become my go-to framework for web development. Its simplicity, performance, and developer experience are unmatched in my opinion.
		`
	},
	{
		id: '2',
		title: 'System Design Principles I Follow',
		date: '2025-02-15',
		excerpt: 'Key principles that guide my approach to system design and architecture.',
		slug: 'system-design-principles',
		content: `
# System Design Principles I Follow

Throughout my career as a developer, I've gathered a set of principles that guide my approach to system design. These aren't just theoretical concepts—they're practical guidelines that have proven their value in real-world projects.

## 1. Start With Why

Before diving into implementation details, I always clarify:
- What problem are we solving?
- Who are we solving it for?
- What constraints are we working with?

This foundation helps prevent scope creep and ensures everyone is aligned on objectives.

## 2. Embrace Simplicity

Simple solutions are easier to:
- Understand
- Maintain
- Debug
- Scale

I follow the principle that a system should be as simple as possible, but no simpler.

## 3. Design for Evolution

Requirements will change. User needs will evolve. Technology will advance.

Instead of trying to design the perfect system upfront, I focus on creating adaptable architectures that can evolve over time with minimal pain.

## 4. Think in Services

Breaking systems into well-defined services with clear boundaries and responsibilities makes them:
- More maintainable
- Easier to reason about
- Scalable independently
- Replaceable without system-wide changes

## 5. Measure Everything

Without data, we're just guessing. I believe in building observability into systems from day one with:
- Comprehensive logging
- Performance metrics
- User behavior analytics
- Error tracking

## Conclusion

These principles have served me well across projects of various sizes and domains. They're not dogma—I adapt them to each specific context—but they provide a solid starting point for approaching complex system design challenges.
		`
	},
	{
		id: '3',
		title: 'Docker and Kubernetes: A Practical Guide',
		date: '2025-02-01',
		excerpt: 'How I use Docker and Kubernetes in my day-to-day development workflow.',
		slug: 'docker-kubernetes-guide',
		content: `
# Docker and Kubernetes: A Practical Guide

Container technology has revolutionized how we build, ship, and run applications. In this post, I'll share my practical approach to using Docker and Kubernetes in everyday development.

## Docker Essentials

### My Dockerfile Template

I start most projects with a variation of this Dockerfile:

\`\`\`dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
CMD ["node", "dist/main.js"]
\`\`\`

This multi-stage build approach keeps my images lean and secure.

### Docker Compose for Local Development

For local development, I use Docker Compose to orchestrate multiple services:

\`\`\`yaml
version: '3'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - ./src:/app/src
    environment:
      - NODE_ENV=development
      - DB_HOST=postgres
    depends_on:
      - postgres

  postgres:
    image: postgres:13
    environment:
      - POSTGRES_USER=dev
      - POSTGRES_PASSWORD=dev
      - POSTGRES_DB=myapp
    volumes:
      - postgres-data:/var/lib/postgresql/data

volumes:
  postgres-data:
\`\`\`

## Kubernetes in Practice

### Resource Definitions

Here's a simplified example of how I define resources in Kubernetes:

\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp
        image: myapp:1.0.0
        resources:
          requests:
            memory: "128Mi"
            cpu: "100m"
          limits:
            memory: "256Mi"
            cpu: "500m"
        ports:
        - containerPort: 3000
\`\`\`

### Helm for Package Management

For more complex deployments, I use Helm to manage Kubernetes applications. It allows for:
- Template rendering
- Value overrides for different environments
- Package distribution
- Version management

## Conclusion

Docker and Kubernetes have transformed my development workflow, making it more consistent, reproducible, and scalable. While there's a learning curve, the benefits for both development and operations are substantial.
		`
	}
];

// Create a writable store with initial posts data
export const posts = writable<BlogPost[]>(initialPosts);

// Function to get a post by slug
export function getPostBySlug(slug: string): BlogPost | undefined {
	return initialPosts.find(post => post.slug === slug);
}

// Function to get all posts
export function getAllPosts(): BlogPost[] {
	return initialPosts;
}

// In a real application, you would add functions to:
// - Add new posts
// - Update existing posts
// - Delete posts
// - Filter posts by tag/category
// - Sort posts
