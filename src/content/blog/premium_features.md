---
title: "Introducing Monadic DNA Explorer Premium: Local genetic analysis with LLM-powered insights"
description: "Unlock comprehensive genetic analysis with LLM chat, Run All analysis, and experimental overview reports, all while maintaining our privacy-first approach with local processing."
pubDate: 2025-12-09
author: "Monadic DNA Team"
tags: ["privacy", "genomics", "GWAS", "LLM", "premium", "announcement"]
image: "/Screenshots/premium_features.png"
---

We're excited to announce **Monadic DNA Explorer Premium**, which brings powerful new capabilities to our privacy-first genomic analysis platform. Premium unlocks two transformative features, **Run All Analysis** and **LLM-Powered Genetic Chat**, that make comprehensive genetic exploration faster and more insightful than ever before while keeping your data secure and private.

## Core Premium Features

### Run All Analysis: Complete Genomic Profiling

Instead of analyzing traits one at a time, **Run All** processes your genotype data against the entire GWAS Catalog in one operation. This is the fastest way to get a comprehensive view of your genetic profile.

**How it works:**
- Upload your 23andMe, AncestryDNA, or other genetic data file
- Click "Run All" to analyze against approximately 1 million GWAS associations
- All processing happens **locally in your browser**, and your genetic data never leaves your device
- Results are computed and stored entirely on your machine

**Why it matters:** Understanding your genetics often requires looking at patterns across multiple traits. Run All gives you the complete picture immediately, letting you explore connections between traits, filter by categories, and identify areas of interest efficiently.

### LLM-Powered Genetic Chat: Natural Language Insights

Ask questions about your genetic data in plain language and get personalized, context-aware insights. Premium's **LLM Chat** is like having a knowledgeable genetics advisor who understands your entire profile.

**How it works:**  
When you ask a question, the system uses **semantic search** to identify up to **500 relevant traits** from your analyzed results. Those traits are then provided as context to the LLM, allowing it to generate rich, multi-dimensional explanations that reflect the full scope of your genetics.

**Example conversations:**
- "Which traits should I pay attention to?"
- "How's my sleep profile based on my genetics?"
- "Which sports are ideal for me?"
- "What kinds of foods do you think I will like best?"
- "On a scale of 1 to 10, how risk-seeking am I?"
- "What can you guess about my appearance?"

**Powerful context:** By automatically assembling a personalized context window from your most relevant traits, LLM Chat can deliver cohesive genetic insights that span multiple categories.

**File attachments:** Upload additional context (TXT, PDF, CSV, TSV files up to 1MB each, with a maximum of 5 files) to help the LLM understand your specific health concerns or research questions.

---

## Privacy-First Architecture: Your Data Stays Local

**Local processing is at the heart of Monadic DNA Explorer.** Unlike other genetic analysis tools that upload your data to Cloud servers, we process everything locally.

### What stays on your device
- ✅ **Your genetic data file**, which is never uploaded or stored on our servers
- ✅ **All genotype processing**, which happens entirely in your browser using JavaScript
- ✅ **Analysis results**, which are stored locally in your browser's memory
- ✅ **Export files**, which are generated on your device and saved to your local disk

### What gets sent securely (only for LLM features)

When you use LLM Chat or analysis, only **text summaries of your results**, not your raw genetic data, are sent to the LLM provider you choose.

**Secure AI options are available to both Free and Premium users.**

---

## Secure LLM Options: Choose Your Privacy Level

You can choose from several LLM providers based on your privacy, performance, and convenience preferences.

### Option 1: Nillion nilAI (High Privacy Cloud)

- **How it works:** Your data is processed inside secure hardware enclaves that Cloud operators cannot inspect
- **Confidential computing:** Hardware-level encryption protects your data during processing
- **Best for:** Users who want Cloud LLM power with strong privacy guarantees

Nillion's nilAI uses confidential computing so your information remains encrypted during analysis.

### Option 2: Ollama (Complete Local Control)

- **How it works:** Run open-source LLM models locally using Ollama
- **Hardware requirement:** Requires **16 GB of VRAM**, not system RAM
- **Zero Cloud dependency:** All processing stays on your machine
- **Best for:** Users who want total control and have capable hardware

With Ollama, your genetic data and LLM conversations never leave your device.

### Option 3: HuggingFace (Cloud-Based)

- **How it works:** Connects to HuggingFace's hosted LLM services
- **Model selection:** Choose from **multiple cutting-edge open-source models**, including new releases as they become available
- **Best for:** Users who want model flexibility and accept standard Cloud privacy practices

### Choosing Your LLM Provider

Configure your preferred LLM provider in **Menu Bar → LLM Settings**. You can switch providers at any time.

**Privacy hierarchy:**
1. **Most Private:** Ollama (fully local)
2. **Highly Private:** Nillion nilAI (Confidential Cloud)
3. **Standard Privacy:** HuggingFace (general Cloud hosting)

---

## Personalization: Context for Better Insights

Premium's **LLM Chat benefits from personalization data**, which helps the LLM provide more relevant and contextualized insights about your genetics.

**What you can add:**
- Ethnicity and ancestry
- Age and gender
- Personal medical history
- Family health conditions
- Lifestyle factors (smoking, alcohol, diet)
- Current medications

**Privacy protection:** All personalization data is **encrypted with your password** and stored locally. You choose when it is unlocked for LLM analysis.

---

## Experimental Features

### Overview Reports (Experimental)

Generate comprehensive reports that synthesize insights across multiple traits using LLM analysis. This feature uses a map-reduce workflow to analyze your results in batches and produce a cohesive summary.

**Note:** This feature is under active development, and results quality or processing times may vary.

---

## Free Tier: Powerful Features for Everyone

Premium builds on a robust free tier that includes the following.

### Semantic Search (LLM-Powered)

Search the GWAS Catalog by **meaning, not keywords**. You can ask for "memory loss" and find studies related to "cognitive decline", "dementia", and "Alzheimer's".

We run open-source embedding models (nomic-embed-text-v1.5) on our infrastructure, offering complete privacy for your searches.

### Export and Import Results

Save your analysis results to disk and reload them later. This is useful for:
- Backing up your work
- Reviewing results at a later time
- Comparing analyses as the GWAS Catalog evolves

Export files contain only your processed results, not your raw genetic data.

### Quality Assessment Labels

Every study includes indicators for:
- Sample size
- Statistical significance
- Ancestry reporting

These labels help you focus on credible studies.

---

## Flexible Payment Options

Premium is available through **two payment methods**.

### Credit/Debit Card (Stripe)
- **$4.99/month**, recurring subscription
- Activation is immediate
- **Cancel directly inside the app**, no need to visit Stripe

### Stablecoin (Blockchain)
- **Flexible prepaid amounts**, starting at $1
- One-time payments, no auto-renewal
- Supported: USDC, USDT, DAI on Ethereum, Base, Arbitrum, Optimism, and Polygon
- **$4.99 gives 30 days**, $10 gives 60 days, and $50 gives 300 days

---

## Educational and Research Discounts

Students, educators, and researchers can apply for discounted or complimentary Premium access. Contact us at premium@monadicdna.com with proof of affiliation.

---

## Important Disclaimers

Premium features are educational tools for exploring population-level genetic associations. These results **cannot predict individual disease risk** and should **not be used as medical advice**. GWAS associations describe population patterns and may have limited applicability to individuals.

Always consult qualified healthcare providers for medical decisions.

---

## Get Started

Visit [explorer.monadicdna.com](https://explorer.monadicdna.com) and log in to access Premium features today.

---

## Open Source and Transparency

Premium features are covered by our open-source codebase at [github.com/Monadic-DNA/Explorer](https://github.com/Monadic-DNA/Explorer). We believe in transparency and welcome community contributions.

## Questions?

Join the conversation in our [Discourse forum](https://recherche.discourse.group/c/public/monadic-dna/30) or reach out at hello@monadicdna.com.

Thank you for supporting privacy-first genomic research and education!
