
import { Service, Partner, Location, Product } from './types';

export const SERVICES: Service[] = [
  {
    id: 'hardware',
    title: 'Hardware Solutions',
    description: 'Procurement and setup of enterprise-grade hardware from world-leading manufacturers.',
    icon: 'Monitor'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'End-to-end protection strategies, firewall management, and real-time threat monitoring.',
    icon: 'Shield'
  },
  {
    id: 'infrastructure',
    title: 'Cloud & Infrastructure',
    description: 'Modernizing data centers with hybrid cloud solutions and robust server architectures.',
    icon: 'Network'
  },
  {
    id: 'managed-it',
    title: 'Managed IT Support',
    description: '24/7 proactive monitoring and helpdesk support for seamless business operations.',
    icon: 'Settings'
  },
  {
    id: 'printing',
    title: 'Managed Print',
    description: 'Cost-effective enterprise printing solutions and automated supply management.',
    icon: 'Printer'
  },
  {
    id: 'consulting',
    title: 'IT Consulting',
    description: 'Digital transformation roadmaps and strategic technology alignment for growth.',
    icon: 'Users'
  }
];

export const PARTNERS: Partner[] = [
  { name: 'Dell', tier: 'Platinum Partner', logo: 'https://cdn.worldvectorlogo.com/logos/dell-2.svg' },
  { name: 'HP', tier: 'Amplify Power Partner', logo: 'https://cdn.worldvectorlogo.com/logos/hp-2.svg' },
  { name: 'Microsoft', tier: 'Certified Partner', logo: 'https://cdn.worldvectorlogo.com/logos/microsoft-5.svg' },
  { name: 'Fortinet', logo: 'https://cdn.worldvectorlogo.com/logos/fortinet.svg' },
  { name: 'Bitdefender', logo: 'https://cdn.worldvectorlogo.com/logos/bitdefender-logo.svg' },
  { name: 'APC', logo: 'https://cdn.worldvectorlogo.com/logos/apc.svg' }
];

export const LOCATIONS: Location[] = [
  {
    city: 'Belize City',
    address: '831 Coney Drive, Belize City',
    phone: '+501 223-3226',
    whatsapp: '+501 630-3886'
  },
  {
    city: 'Belmopan',
    address: '#2 Macaw Avenue, Belmopan City',
    phone: '+501 822-0482',
    whatsapp: '+501 615-4323'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Dell Latitude 5440',
    category: 'Laptops',
    brand: 'Dell',
    description: 'Reliable and secure business laptop designed for mobile professionals.',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=800',
    specs: ['13th Gen Intel Core', 'DDR5 Memory', 'FHD Camera', 'ExpressConnect']
  },
  {
    id: 'ess-1',
    name: 'Logitech MK270 Wireless Combo',
    category: 'PC Essentials',
    brand: 'Logitech',
    description: 'Reliable wireless keyboard and mouse combo with long-range connectivity.',
    // image: 'https://images.unsplash.com/photo-1541140532154-b024d715b909?auto=format&fit=crop&q=80&w=800',
    image: 'https://unsplash.com/photos/black-and-yellow-logitech-keyboard-6gq1ZbJRhYQ',
    specs: ['Full-size keyboard', 'Compact mouse', '2.4GHz Wireless', '24-month battery life']
  },
  {
    id: '3',
    name: 'PowerEdge R760 Rack Server',
    category: 'Servers',
    brand: 'Dell',
    description: 'Powerful 2U dual-socket server for demanding workloads and data centers.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800',
    specs: ['4th Gen Intel Xeon', 'Up to 32 NVMe drives', 'PCIe Gen5', 'iDRAC9 Management']
  },
  {
    id: 'ess-2',
    name: 'Dell 24" Monitor - P2422H',
    category: 'PC Essentials',
    brand: 'Dell',
    description: 'Professional monitor optimized for eye comfort and peak productivity.',
    image: 'https://images.unsplash.com/photo-1547119957-637f8679db1e?auto=format&fit=crop&q=80&w=800',
    specs: ['FHD Resolution', 'ComfortView Plus', 'IPS Technology', 'Adjustable Stand']
  },
  {
    id: 'ess-3',
    name: 'Kingston XS2000 External SSD',
    category: 'PC Essentials',
    brand: 'Kingston',
    description: 'Pocket-sized portable storage with next-gen USB 3.2 Gen 2x2 speeds.',
    image: 'https://images.unsplash.com/photo-1590615370581-265ae1980820?auto=format&fit=crop&q=80&w=800',
    specs: ['2000MB/s Read/Write', 'Up to 4TB', 'IP55 Rated', 'USB-C Connectivity']
  },
  {
    id: '4',
    name: 'FortiGate 60F Firewall',
    category: 'Networking',
    brand: 'Fortinet',
    description: 'Next-Generation Firewall for high-performance secure networking.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800',
    specs: ['SD-WAN ready', 'Enterprise security', 'IPS & Antimalware', 'Compact form factor']
  },
  {
    id: 'ess-4',
    name: 'Logitech H390 USB Headset',
    category: 'PC Essentials',
    brand: 'Logitech',
    description: 'Noise-canceling headset for clear internet calls and business communication.',
    image: 'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&q=80&w=800',
    specs: ['USB-A Plug-and-play', 'Noise-canceling mic', 'In-line controls', 'Comfortable padding']
  },
  {
    id: '6',
    name: 'APC Smart-UPS 1500VA',
    category: 'Infrastructure',
    brand: 'APC',
    description: 'Intelligent and efficient network power protection for servers and networking.',
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870811?auto=format&fit=crop&q=80&w=800',
    specs: ['LCD Interface', 'Pure Sine Wave', 'Cloud monitoring', 'Hot-swappable batteries']
  },
  {
    id: 'ess-5',
    name: 'HDMI 2.1 High-Speed Cable',
    category: 'PC Essentials',
    brand: 'Generic',
    description: 'Ultra high-speed 48Gbps HDMI cable for professional 4K/8K displays.',
    image: 'https://images.unsplash.com/photo-1615526675159-e248c3021d3f?auto=format&fit=crop&q=80&w=800',
    specs: ['8K @ 60Hz Support', 'Dynamic HDR', 'eARC Support', 'Gold-plated connectors']
  }
];
