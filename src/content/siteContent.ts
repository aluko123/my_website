export interface FocusArea {
    title: string;
    summary: string;
    methods: string[];
}

export interface WorkEntry {
    year: string;
    title: string;
    context: string;
    impact: string;
    stack: string[];
    link?: string;
}

export interface Publication {
    year: string;
    title: string;
    venue: string;
    summary: string;
    link: string;
}

export interface Post {
    slug: string;
    date: string;
    title: string;
    summary: string;
    readTime: string;
    tags: string[];
    content: string[];
    link?: string;
}

export interface UpdateItem {
    date: string;
    note: string;
}

export const siteMeta = {
    name: "Fola Aluko",
    role: "AI/ML Systems Engineer",
    location: "United States",
    tagline:
        "I enjoy building and iterating on reliable systems to scale AI adoption. I work at the edge of research and product engineering, and my interests are applied to machine learning, systems engineering, developer tooling.",
    bio: "I build practical AI systems with an emphasis on reliability, measurable outcomes, and maintainable engineering workflows.",
    profileImage: "/pictures/new_picture.jpg",
    email: "folaaluko02@gmail.com",
    github: "https://github.com/aluko123",
    linkedin: "https://linkedin.com/in/fola-aluko",
    twitter: "https://x.com/jukedout",
    scholar: "https://scholar.google.com/citations?user=Zs8YDaQAAAAJ&hl=en",
};

export const focusAreas: FocusArea[] = [
    {
        title: "Applied AI for Accessibility",
        summary:
            "Designing context-aware pipelines for language and multimodal understanding with practical accessibility outcomes.",
        methods: ["NLP", "Transformer models", "Model evaluation"],
    },
    {
        title: "Distributed Systems Engineering",
        summary:
            "Building resilient services with clear failure handling, observability, and production-ready deployment paths.",
        methods: ["Go services", "Kafka streams", "Container orchestration"],
    },
    {
        title: "Applied RL",
        summary:
            "Exploring reinforcement learning workflows that are faster to train, evaluate, and ship.",
        methods: ["Policy optimization", "Evaluation loops", "Iteration speed"],
    },
];

export const researchInterests: string[] = [
    "Applied ML for accessibility and communication systems",
    "Scaling machine learning optimizations for AI adoption",
    "Research-to-production workflows for AI products",
    "Making reinforcement learning faster",
    "Model interpretability",
];

export const updates: UpdateItem[] = [
    {
        date: "2026",
        note: "AI Engineer, Accomplishr.",
    },
    {
        date: "2025",
        note: "Paper accepted into IEEE.",
    },
    {
        date: "2025",
        note: "AI Engineer, Cirkle.",
    },
    {
        date: "2024",
        note: "Published thesis on caption to ASL.",
    },
    {
        date: "2024",
        note: "MS, Computer Science, UAH.",
    },
    {
        date: "2023",
        note: "Machine Learning Engineer, UAH.",
    },
    {
        date: "2022",
        note: "BS, Computer Science, University of Alabama in Huntsville (UAH).",
    },
    {
        date: "2019",
        note: "Research at the SMAP Center on the implementation of AI in military training.",
    },
];

export const hobbies: Array<{ title: string; note: string }> = [
    {
        title: "Music",
        note: "I have played the saxophone for over a decade and enjoy jazz, gospel, and collaborative performance.",
    },
    {
        title: "Sports",
        note: "I enjoy staying active through soccer, table tennis, basketball, and weight training.",
    },
    {
        title: "Chess & Puzzles",
        note: "I like strategic games and puzzle-solving as a way to think through hard engineering problems.",
    },
];

export const workLastYear: WorkEntry[] = [];

export const publications: Publication[] = [
    {
        year: "2025",
        title: "Context-Aware Automated System for Image Caption to ASL Translation for Improved Accessibility in Media Applications",
        venue: "IEEE",
        summary:
            "Proposes a context-aware image-caption to ASL pipeline and analyzes explainability trade-offs in practical deployment.",
        link: "https://ieeexplore.ieee.org/abstract/document/10971481",
    },
    {
        year: "2024",
        title: "Enhancing Accessibility: A Pilot Study for Context-Aware Image-Caption to American Sign Language (ASL) Translation",
        venue: "ProQuest",
        summary:
            "Explores transformer-based encoder-decoder strategies for ASL translation quality and context retention.",
        link: "https://www.proquest.com/docview/3139064543",
    },
    {
        year: "2023",
        title: "A multi-agent system for mitigating partial display failures",
        venue: "ACM ICVRV 2023",
        summary:
            "Presents a multi-agent approach for mitigating partial display failures in immersive/visual systems.",
        link: "https://dl.acm.org/doi/10.1145/3603287.3651189",
    },
];

export const posts: Post[] = [
    {
        slug: "building-distributed-cartpole-rl",
        date: "Coming soon",
        title: "Learning Distributed RL Through CartPole at Worker Scale",
        summary:
            "A build log on collecting reward steps across workers, managing policy updates, and finding optimization opportunities in distributed RL.",
        readTime: "7 min",
        tags: ["Reinforcement Learning", "Distributed Systems"],
        link: "https://github.com/aluko123/distributed-cartpole-rl",
        content: [
            "This post explains how I used CartPole as a practical sandbox for understanding distributed RL mechanics beyond textbook descriptions.",
            "I will walk through reward collection across multiple workers, replay buffer interfaces, policy versioning, and where optimization effort pays off most.",
        ],
    },
    {
        slug: "engineering-a-go-network-proxy",
        date: "2026",
        title: "Building a GPU-Native Inference Gateway for Open-Source Models",
        summary:
            "Open-source LLMs are now good enough that the hard part is no longer model quality. The hard part is running them efficiently.",
        readTime: "7 min",
        tags: ["Go", "LLM Infrastructure", "Inference Systems"],
        link: "https://github.com/aluko123/go-network-proxy",
        content: [
            "I built this project because I wanted a practical way to serve self-hosted models without wasting GPU capacity.",
            "## Why I Built This",
            "Self-hosted inference usually starts simple, then gets messy as request volume grows.",
            "- Requests with identical system prompts lose KV-cache locality because traffic is spread arbitrarily.",
            "- Some workers run hot or memory-constrained while others are underused.",
            "- Distributed/tensor-parallel requests need topology-aware placement, not generic round-robin.",
            "- A single degraded worker can drag down the fleet without strong failure isolation.",
            "## What This Solution Is",
            "This gateway sits in front of workers and routes requests using model mapping, queue and priority state, worker health, GPU utilization and memory headroom, prefix-affinity signals for KV-cache reuse, topology constraints (NVLink/InfiniBand), and circuit-breaker state for failing workers. It is less of a proxy and more of a lightweight scheduler.",
            "## What Is Novel Here",
            "- Prefix affinity + resource scoring: cache affinity is treated as a routing signal without overriding queue, memory, and utilization constraints.",
            "- Memory-aware routing: requests estimate KV-cache footprint to avoid workers likely to hit memory pressure.",
            "- Topology-aware constraints: tensor-parallel and distributed workloads can account for NVLink and InfiniBand constraints.",
            "- Circuit-breaker behavior: repeatedly failing workers are temporarily removed from selection.",
            "## How This Differs from vLLM and LiteLLM",
            "How this differs from vLLM and LiteLLM: vLLM is an inference engine, LiteLLM is primarily a provider abstraction/proxy layer, and this project is a routing and scheduling control layer for self-hosted GPU workers. They solve related but different problems and can be used together.",
            "## Metrics and Observability",
            "- inference_requests_total",
            "- inference_request_duration_seconds",
            "- inference_time_to_first_token_seconds",
            "- inference_queue_wait_seconds",
            "- inference_processing_seconds",
            "- inference_queue_depth",
            "- inference_in_flight",
            "- inference_tokens_total",
            "- prefix_cache_hits_total / prefix_cache_misses_total",
            "- worker_healthy / worker_gpu_utilization / worker_queue_depth",
            "- auth_success_total / auth_failures_total / rate_limited_requests_total",
            "## What to Put on Grafana",
            "- TTFT p50/p95 and end-to-end latency by model.",
            "- Queue depth and in-flight trends.",
            "- Prefix cache hit ratio over time.",
            "- Worker health transitions and utilization skew.",
            "- Error/cancel/rate-limit breakdowns.",
            "## Validation",
            "This repo includes integration and load tests for request flow, auth, concurrency, rate limiting, and routing behavior, so this is measurable and testable rather than just conceptual.",
            "## Why This Matters",
            "This matters for open-model democratization because it applies scheduler quality, cache locality, memory pressure management, topology-aware placement, failure isolation, and telemetry-driven tuning in an implementation teams can run and modify.",
            "## What Is Next",
            "- Richer routing-decision logging and score explainability.",
            "- Benchmark harness and A/B routing comparisons.",
            "- Routing-weight tuning from real traffic profiles.",
            "- Shared prefix index for horizontally scaled gateways.",
            "- Deeper NVIDIA/DCGM integration.",
            "- Distributed tracing and production hardening.",
        ],
    },
];
