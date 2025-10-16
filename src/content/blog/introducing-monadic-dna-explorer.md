---
title: "Introducing Monadic DNA Explorer: Private genomic analysis with secure AI"
description: "A privacy-first genomics tool that lets you explore  GWAS Catalog data and analyze your genetic information entirely in your browser, with optional secure AI analysis."
pubDate: 2025-10-16
author: "Monadic DNA Team"
tags: ["privacy", "genomics", "GWAS", "AI", "tools"]
---

We're excited to announce the launch of [Monadic DNA Explorer](https://explorer.monadicdna.com/), a powerful new tool that brings privacy-preserving genomic analysis directly to your browser.

## What is Monadic DNA Explorer?

Monadic DNA Explorer is a privacy-first application that allows you to explore genetic traits from the GWAS Catalog and analyze your own genomic data, all without ever sending your personal information to our servers.

### Key Features

**Comprehensive Scientific Data**
The app uses publicly-funded, scientifically-vetted data from the [GWAS Catalog](https://www.ebi.ac.uk/gwas/), giving you access to approximately one million genetic trait associations. Our filtering interface makes it easy to sift through this vast database and find the traits that interest you.

**Quality Assessment and Data Labels**
Based on sample size, statistical significance, and data quality, we label each study with a quality assessment to guide you toward more credible results. We also add clear labels to relevance, power, and effect data to help you interpret the findings appropriately.

**Bring Your Own Data**
You can plug in your own genomic data from popular providers like 23andMe, Ancestry, and others. Once loaded, you can reveal your personalized results for each GWAS Catalog record based on your own genotype to gauge your risk for various traits.

**Privacy by Design**
All user data processing happens locally in your browser. Results are stored transiently in memory, and you have complete control—with the option to export and import results from disk. **Monadic DNA never handles user data on our servers.** The app maximizes anonymity and privacy at every step.

**Secure AI Analysis**
Using nilAI from [Nillion](https://nillion.com/), we offer secure AI analysis where large language models running inside secure Trusted Execution Environments (TEEs) process your data. This means you can get AI-powered insights without exposing your genomic information.

The AI analysis provides you with an overview of the study in question, information about the corresponding trait, an explanation of your own risk calculation based on your genotype, and important caveats around interpretation. The AI uses your other traits as context to provide more personalized insights. Importantly, the AI analysis reminds you about the limitations of the data and encourages you to always go through regular medical channels for health concerns.

**Open Source**
The app is fully open source, and the code is available at [github.com/Monadic-DNA/Explorer](https://github.com/Monadic-DNA/Explorer). We believe in transparency and welcome contributions from the community.

## Important Disclaimers

Traits from the GWAS Catalog reflect population-wide genetic associations and cannot predict individual propensities for diseases or other conditions. This tool is purely for educational purposes and should not be seen as a replacement for qualified medical professionals and their advice. Always consult with healthcare providers for medical decisions.

Throughout the app, we provide repeated notices at each step to remind users that they are looking at population-level associations which may have little to no bearing on their personal health. Please take the results with a pinch of salt and consult your healthcare professional for any medical concerns you have.

We seek to achieve a balance between democratizing access to educational genomic data while ensuring users get the institutional help they need. Our goal is to empower informed exploration, not to replace professional medical guidance.

## Who Is This For?

Monadic DNA Explorer is designed to make life easier for:
- **Personal genomics enthusiasts** who want to explore their data privately
- **Researchers** who need to examine GWAS Catalog data efficiently
- **Privacy-conscious individuals** interested in genetic analysis

## Coming Soon

We're working on exciting new features, including:
- **Bulk analysis**: Run an analysis over all available traits in the database
- **AI-powered insights**: Ask the AI to process hundreds of traits at once for comprehensive reports

## See It In Action

Want to see how it works? Watch a recording of our first public demo at [x.com/Nillioneco/status/1978113596539441442](https://x.com/Nillioneco/status/1978113596539441442).

## Get Started

Ready to explore your genomic data privately? Visit [explorer.monadicdna.com](https://explorer.monadicdna.com/) and start your journey into privacy-preserving genomics today.

---

## Acknowledgments

We are deeply grateful for the public funding of science and the valuable open source data that GWAS Catalog provides through international scientific collaboration. This project would not be possible without the tireless work of researchers worldwide who contribute to open science.

## Get Involved

Have questions or feedback? We'd love to hear from you, especially bug reports and feedback from researchers. Join the conversation in our community at [recherche.discourse.group/c/public/monadic-dna/30](https://recherche.discourse.group/c/public/monadic-dna/30).
