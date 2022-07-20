import { NodeType, PackageType, RepoType } from "../types";

export const getTreeData = ({
  repos,
  packages,
}: {
  repos: RepoType[];
  packages: PackageType[];
}): NodeType[] => {
  return [
    // Complete
    {
      name: "root",
      children: [
        {
          name: "education",
          children: [
            {
              name: "Institution: Brunel University, London",
            },
            {
              name: "Major: BSc Computer Science",
            },
            {
              name: "Award: Bachelor of Science, with First Class Honours",
            },
          ],
        },
        // Complete
        {
          name: "projects",
          children: [
            {
              name: "eLearningInfosec: SOC Analyst training Splunk/SIEM\n",
              note: "    - Learnt Networking and Cybersecurity concepts, analysed logs from various sources such as Firewalls and IDs/IPs",
            },
            {
              name: "Goldman Sachs: Virtual Cybersecurity Engineering Programme\n",
              note: "    - Carried out a brute force attack on a leaked password database, proposed uplifts to security controls and policies",
            },
            {
              name: "Red Hat Linux and CentOS: Linux Administration\n",
              note: "    - Acquired a solid understanding of Red Hat LinuxOS, user management, networking (troubleshooting), and command line operations.",
            },
            {
              name: "Internet of Things Academy: Bash Shell Scripting\n",
              note: "    - Gained thorough understanding of bash scripting, automated tasks such as backup of files to save time",
            },
            {
              name: "CS3609 Cybersecurity: Brunel Tech Start-Up\n",
              note: "    - Produced network diagrams to visualize the flow of data, identified potential threats to key assets, business continuity planning",
            },
            {
              name: "Concurrent Client-Server System: WLFB Banking Application\n",
              note: "    - Designed an algorithm for demonstrating distibuted network computing issues, tested application for atomicity and successful operation",
            },
          ],
        },
        // Complete
        {
          name: "skills",
          children: [
            {
              name: "Splunk (SIEM)",
            },
            {
              name: "Networking protocols (SSH, SFTP, Telnet, SMTP, DNS, NTP, HTTPS)",
            },
            {
              name: "Wireshark (PCAP analysis)",
            },
            {
              name: "Cryptography (Hashing, Symmetric and Asymmetric encryption, PKI)",
            },
            {
              name: "Qualitative and Quantitative risk analysis",
            },
            {
              name: "Threat Modelling (Data flow diagrams, Persona-non-grata, STRIDE model, STIX and TAXII)",
            },
            {
              name: "Access control (Physical, Logical and Administrative controls, formal models of access (DAC, MAC, RBAC))",
            },
            {
              name: "Network Perimeter Security (Palo Alto  Next-Gen firewalls, Cisco ASA firewalls, IDS/IPS/NIDS/NIPS/HIDS/HIPS, Load Balancer (f5), WAFs)",
            },
            {
              name: "Business Continuity Planning (BCP), Value Chain Analysis (Business Impact Analysis BCP), Risk Register",
            },
            {
              name: "Policies (Data handling, Password, BYOD, Back-up, Incident handling, Disaster recovery, Change Management)",
            },
            {
              name: "CIA Triad (Authentication, Authorisation, Auditing, Non-Repudiation)",
            },
            {
              name: "Network threats and attacks)",
            },
            {
              name: "Cloud Computing (SaaS, PaaS, IaaS, contract and service level agreement)",
            },
            {
              name: "Web application security",
            },
            {
              name: "Governance Elements, Compliance, Standards, Policies, and Procedures",
            },
          ],
        },
        // Complete
        {
          name: "frameworks",
          children: [
            {
              name: "National Institute of Standards and Technology (NIST)",
            },
            {
              name: "The Center for Internet Security Critical Security Controls (CIS)",
            },
            {
              name: "The International Standards Organization (ISO i.e. 27001)",
            },
            {
              name: "Cyber Intrusion Kill Chain (Lockheed Martin)",
            },
            {
              name: "MITRE ATTACK (Threat mapping)",
            },
          ],
        },
        // Complete
        {
          name: "stack",
          children: [
            {
              name: "Bash scripting",
            },
            {
              name: "Java, SpringBoot",
            },
            {
              name: "Python",
            },
            {
              name: "Javascript, React.js",
            },
            {
              name: "Solidity (Ethereum Blockchain), Hardhat, ether.js, Metamask",
            },
            {
              name: "Structured Query Language (SQL)",
            },
            {
              name: "Git, Github",
            },
            {
              name: "Project Management (Scrum framework, Jira, Trello)",
            },
          ],
        },
        // Complete
        {
          name: "experience",
          children: [
            {
              name: "eLearningInfosec: SOC Analyst training Splunk/SIEM",
            },
            {
              name: "Associate Teaching Assistant: Department of Computer Science at Brunel University",
            },
            {
              name: "Amazon: Spring Technology Insights Programme",
            },
            {
              name: "Pakistani Society: Web Officer at Brunel University",
            },
            {
              name: "Made in Brunel: Software Innovations Ambassador at Brunel University",
            },
            {
              name: "Bright Network: Technology Virtual Internship ",
            },
          ],
        },
        // Complete
        {
          name: "os",
          children: [
            {
              name: "Windows",
            },
            {
              name: "Unix/Linux",
            },
            {
              name: "macOS",
            },
          ],
        },

        // Complete
        {
          name: "certifications",
          children: [
            {
              name: "ISC2 Entry-Level Cybersecurity",
            },
            {
              name: "Intro to Splunk",
            },
            {
              name: "Developing Secure Software by Linux Foundation",
            },
            {
              name: "AWS fundamentals",
            },
            {
              name: "CyberSecurity and Oracle cloud",
            },
            {
              name: "AWS fundementals",
            },
            {
              name: "CompTIA Security+ (in progress)",
            },
          ],
        },
        // Complete
        {
          name: "extracurricular",
          children: [
            {
              name: "Brunel University: Volunteered Student Buddy",
            },
            {
              name: "Brunel+ Awards: Bonze, Silver, and Gold",
            },
            {
              name: "Hacker News",
            },
          ],
        },
        // Complete
        {
          name: "links",
          children: [
            {
              name: "linkedin.com/in/zahid-ali1",
              link: "https://www.linkedin.com/in/zahid-ali1/",
            },
            {
              name: "github.com/zahidali81",
              link: "https://github.com/zahidali81",
            },
          ],
        },
      ],
    },
  ];
};
