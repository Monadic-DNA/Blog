---
title: "Introducing Monadic DNA Explorer: Private genomic analysis with secure A.I."
description: "A privacy-first genomics tool that lets you explore  GWAS Catalog data and analyze your genetic information entirely in your browser, with optional secure A.I. analysis."
pubDate: 2025-10-16
author: "Monadic DNA Team"
tags: ["privacy", "genomics", "GWAS", "A.I.", "announcement"]
---

We're excited to announce the launch of [Monadic DNA Explorer](https://explorer.monadicdna.com/), a privacy-first tool that lets you explore your genetic data and dive into genome-wide association studies, all in your browser with your data never leaving your device.

## What is Monadic DNA Explorer?

Monadic DNA Explorer gives you access to approximately one million genetic trait associations from the GWAS Catalog. Whether you're curious about your 23andMe data, conducting research, or just fascinated by genomics, you can explore real scientific studies and see how they relate to your own genome without sending your personal information to our servers.

### Key Features

**Comprehensive Scientific Data**
The app uses publicly-funded, scientifically-vetted data from the [GWAS Catalog](https://www.ebi.ac.uk/gwas/). Searching through a million trait associations can be overwhelming, so we built a powerful filtering interface to help you find what you're looking for, whether that's traits related to a specific condition, studies above a certain sample size, or associations with strong statistical support.

![The basic interface](/Screenshots/20251016_explorer_main.png)

Every study links directly to the original GWAS Catalog entry and the corresponding [dbSNP](https://www.ncbi.nlm.nih.gov/snp/) record, where you can find detailed variant information including genomic locations and population frequencies.

**Quality Assessment and Data Labels**
Not all GWAS studies are created equal. Based on sample size, statistical significance and data quality, we label each study with a quality assessment to help you focus on the most credible results. We also surface key metrics like effect size and statistical power so you can understand the strength of each association.

**Bring Your Own Data**
You can plug in your own genomic data from popular providers like 23andMe, Ancestry, etc. Once loaded, you can reveal your personalized results for each GWAS Catalog record based on your own genotype to gauge your risk for various traits.

![User data plugged into the app](/Screenshots/20251016_explorer_user_data.png)

**Privacy by Design**
All user data processing happens locally in your browser. Results are stored transiently in memory, and you have complete control with the option to export and import results from disk. **Monadic DNA never handles user data on our servers.** The app maximizes anonymity and privacy at every step.

**Secure A.I. Analysis**
Using nilA.I. from [Nillion](https://nillion.com/), we offer secure A.I. analysis where large language models running inside secure Trusted Execution Environments (TEEs) process your data. This means you can get A.I.-powered insights without exposing your genomic information.

![A.I. analysis of a user trait 1](/Screenshots/20251016_explorer_ai_analysis.png)

The A.I. analysis provides you with an overview of the study in question, information about the corresponding trait, an explanation of your own risk calculation based on your genotype, and important caveats around interpretation. The A.I. uses your other traits as context to provide more personalized insights. Of course, the A.I. analysis reminds you about the limitations of the data and encourages you to always go through regular medical channels for health concerns.

**Open Source**
The app is fully open source, and the code is available at [github.com/Monadic-DNA/Explorer](https://github.com/Monadic-DNA/Explorer). We believe in transparency and welcome contributions from the community.

## Important Disclaimers

Traits from the GWAS Catalog reflect population-wide genetic associations and cannot predict individual propensities for diseases or other conditions. This tool is purely for educational purposes and should not be seen as a replacement for qualified medical professionals and their advice. Always consult with healthcare providers for medical decisions.

Throughout the app, we provide repeated notices at each step to remind users that they are looking at population-level associations which may have little to no bearing on their personal health. Please take the results with a pinch of salt and consult your healthcare professional for any medical concerns you have.

![One of the notices the user sees](/Screenshots/20251016_explorer_caveats.png)

We seek to achieve a balance between democratizing access to educational genomic data while ensuring users get the institutional help they need. Our goal is to empower informed exploration, not to replace professional medical guidance.

![A.I. analysis caveats](/Screenshots/20251016_explorer_ai_analysis_disclaimer.png)

## Use Cases

**For the Curious**
Got your 23andMe or Ancestry data and wondering what it actually means? Explorer lets you see the real studies behind genetic associations, understand which ones are well-supported, and learn what researchers have discovered about traits in your genome. All processing happens locally in your browser and your data never leaves your device.

**For Researchers and Students**
Whether you're doing literature review, teaching GWAS methodology, or exploring hypotheses, Explorer provides a fast way to navigate the GWAS Catalog's approximately one million associations. Filter by trait, sample size, p-value, or effect size. Direct links to GWAS Catalog and dbSNP make it easy to dive deeper into studies of interest.

## Coming Soon

We're working on exciting new features, including:
- **Bulk analysis**: Run an analysis over all available traits in the database
- **A.I.-powered insights**: Ask the A.I. to process hundreds of traits at once for comprehensive reports

## See It In Action

Want to see how it works? Watch a recording of our first public demo at [x.com/Nillioneco/status/1978113596539441442](https://x.com/Nillioneco/status/1978113596539441442).

## Get Started

Visit [explorer.monadicdna.com](https://explorer.monadicdna.com/) to start exploring.

---

## Acknowledgments

We are deeply grateful for the public funding of science and the valuable open source data that GWAS Catalog provides through international scientific collaboration. This project would not be possible without the tireless work of researchers worldwide who contribute to open science.

## Get Involved

Have questions or feedback? We'd love to hear from you, especially bug reports and feedback from researchers. Join the conversation in our [Discourse forum](https://recherche.discourse.group/c/public/monadic-dna/30).
