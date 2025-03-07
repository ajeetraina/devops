/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: "doc",
      id: "intro",
    },
    {
      type: "category",
      label: "Prerequisites",
      link: {
        type: "generated-index",
        description: "Essential skills to master before diving into DevOps",
      },
      items: [
        {
          type: "doc",
          id: "prerequisites/learning-path",
        },
        {
          type: "category",
          label: "Bash Scripting",
          items: [
            {
              type: "doc",
              id: "prerequisites/bash/intro-to-bash",
            },
            {
              type: "doc",
              id: "prerequisites/bash/variables-and-loops",
            },
            {
              type: "doc",
              id: "prerequisites/bash/automation-scripts",
            },
          ],
        },
        {
          type: "category",
          label: "Programming Fundamentals",
          items: [
            {
              type: "doc",
              id: "prerequisites/programming/python-basics",
            },
            {
              type: "doc",
              id: "prerequisites/programming/go-basics",
            },
            {
              type: "doc",
              id: "prerequisites/programming/sdlc-fundamentals",
            },
          ],
        },
        {
          type: "category",
          label: "Linux Fundamentals",
          items: [
            {
              type: "doc",
              id: "prerequisites/linux/command-line-basics",
            },
            {
              type: "doc",
              id: "prerequisites/linux/file-management",
            },
            {
              type: "doc",
              id: "prerequisites/linux/system-administration",
            },
          ],
        },
        {
          type: "category",
          label: "Virtualization",
          items: [
            {
              type: "doc",
              id: "prerequisites/virtualization/concepts",
            },
            {
              type: "doc",
              id: "prerequisites/virtualization/vagrant-quickstart",
            },
          ],
        },
        {
          type: "category",
          label: "System Architecture",
          items: [
            {
              type: "doc",
              id: "prerequisites/architecture/microservices",
            },
            {
              type: "doc",
              id: "prerequisites/architecture/api-design",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Observability",
      link: {
        type: "generated-index",
        description: "Here's a list of popular Observability Tools",
      },
      items: [
        {
          type: "category",
          label: "Beginners",
          link: {
            type: "generated-index",
            description:
              "Beginners guide to start off with observability tools",
          },
          items: [
            {
              type: "doc",
              id: "observability/beginners/datadog",
            },
            {
              type: "doc",
              id: "observability/beginners/grafana",
            },
            {
              type: "doc",
              id: "observability/beginners/prometheus",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Provisioning",
      link: {
        type: "generated-index",
        description: "Here's a list of popular Provisioning Tools",
      },
      items: [
        {
          type: "category",
          label: "Beginners",
          link: {
            type: "generated-index",
            description:
              "Beginners guide to Infrastructure as Code",
          },
          items: [
            {
              type: "doc",
              id: "provisioning/beginners/ansible",
            },
            {
              type: "doc",
              id: "provisioning/beginners/terraform",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Orchestration",
      link: {
        type: "generated-index",
        description: "Here's a list of popular Orchestration Tools",
      },
      items: [
        {
          type: "category",
          label: "Beginners",
          link: {
            type: "generated-index",
            description:
              "Beginners guide to container orchestration",
          },
          items: [
            {
              type: "doc",
              id: "orchestration/beginners/docker",
            },
            {
              type: "doc",
              id: "orchestration/beginners/kubernetes",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "CI/CD",
      link: {
        type: "generated-index",
        description: "Here's a list of popular CI/CD Tools",
      },
      items: [
        {
          type: "category",
          label: "Beginners",
          link: {
            type: "generated-index",
            description:
              "Beginners guide to continuous integration and deployment",
          },
          items: [
            {
              type: "doc",
              id: "cicd/beginners/jenkins",
            },
            {
              type: "doc",
              id: "cicd/beginners/github-actions",
            },
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;