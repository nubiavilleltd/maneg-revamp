// Function to generate a random ID
function generateRandomId() {
  return Math.floor(Math.random() * 10000);
}

// Function to generate a random logo URL
function generateRandomLogo() {
  const logos = [
    "https://img.freepik.com/free-vector/colorful-logo_1035-315.jpg?t=st=1690233162~exp=1690233762~hmac=81cc105787cbe3a5dd4b48ff4d83e166c44e88b19024ed20a3b2254191aeb122",
    "https://img.freepik.com/premium-vector/geometric-shape_397430-51.jpg",
    "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?w=826&t=st=1690240668~exp=1690241268~hmac=33fe50ee65856cfba6a06f72e266bf18feea3521fadf0eae6abd070cdf3a656b",
    "https://img.freepik.com/free-vector/letter-y-circle-logo_530521-708.jpg?w=740&t=st=1690240759~exp=1690241359~hmac=515e8474fb91dd5004ca382219fafe196ff89310a51e4cd9cf84d8bcfb5cbda6",
    "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?w=740&t=st=1690240801~exp=1690241401~hmac=5718e9535a27300bdc95eaa7b20f6661943e8d3f23632e1eb224cde0e47d1222",
    "https://img.freepik.com/free-psd/logo-mockup-panel-wall_511564-1493.jpg?w=900&t=st=1690240824~exp=1690241424~hmac=fe46c8f6ae634131ed88f1ded57d446090157aed3142907c84db9ede016648d1",
    "https://img.freepik.com/premium-psd/logo-mockup-metal-psd-wall-realistic-design_53876-130201.jpg?w=826",
    "https://img.freepik.com/free-vector/creative-square-logo-vector-template_460848-13897.jpg?w=740&t=st=1690240890~exp=1690241490~hmac=02d4dd6eab92eef85556d24bc153540c0592592f4810b28e1d95eda4aee576ef",
    "https://img.freepik.com/free-vector/purple-eagle-logo-design-gradient-colorful_826849-709.jpg?w=740&t=st=1690240916~exp=1690241516~hmac=6dcc266085a6e3c460d4552ebfed65571155446f079e4fadce2d61be637a4aa6",
    "https://img.freepik.com/free-vector/abstract-logo-flame-shape_1043-44.jpg?w=740&t=st=1690240942~exp=1690241542~hmac=55fc69feaf7bb7e6441601328f36f5ce61e2da91397aac513ee4980ab0b343ac",
    "https://img.freepik.com/premium-vector/innovation-technology-company-abstract-vector-logo-template_159025-1382.jpg?w=740",
    "https://img.freepik.com/free-vector/shield-gradient-logo-design-colorful_361591-1612.jpg?w=740&t=st=1690241049~exp=1690241649~hmac=9738bd0a5b1b405f808d49393621e5fc3802efcb5d6c6a6d87d23968c19c90fe",
    // Add more logo URLs here
  ];
  return logos[Math.floor(Math.random() * logos.length)];
}

// Function to generate a random company name ...
function generateRandomCompanyName() {
  const companyNames = [
    "FictiCorp",
    "ImaginaryTech",
    "Make-Believe Industries",
    "Phantom Solutions",
    "Dreamscape Enterprises",
    "Fantasy Innovations",
    "Enigma Creations",
    "WonderWorks",
    "Illusionary Systems",
    "Mirage Corp",
    // Add more company names here
  ];
  return companyNames[Math.floor(Math.random() * companyNames.length)];
}

// Function to generate a random description
function generateRandomDescription() {
  const descriptions = [
    "FictiCorp is a leading innovator in imaginary technologies, striving to make the impossible possible.",
    "ImaginaryTech is your gateway to a virtual world of limitless possibilities and fantastic adventures.",
    "Make-Believe Industries specializes in creating imaginary products that spark creativity and wonder.",
    "Phantom Solutions provides cutting-edge solutions for ethereal challenges in the digital realm.",
    "Dreamscape Enterprises turns dreams into reality through state-of-the-art imaginative solutions.",
    "Fantasy Innovations brings magical ideas to life with their groundbreaking innovations.",
    "Enigma Creations unlocks the mysteries of innovation, delivering unreal possibilities.",
    "WonderWorks creates wonders through its extraordinary and imaginative products.",
    "Illusionary Systems builds products that seem like magic but are based on advanced technologies.",
    "Mirage Corp creates illusions of incredible products, captivating your imagination.",
    // Add more descriptions here
  ];
  return descriptions[Math.floor(Math.random() * descriptions.length)];
}

// Function to generate a random fake address
function generateRandomAddress() {
  const addresses = [
    "123 Imaginary Street, Fantasyland",
    "456 Make-Believe Avenue, Dreamville",
    "789 Wonderland Boulevard, Fictitia",
    "101 Phantom Way, Illusoria",
    "111 Dreamer's Lane, Enchanted City",
    // Add more addresses here
  ];
  return addresses[Math.floor(Math.random() * addresses.length)];
}

// Generate the "members" array with 10 objects
const members = Array.from({ length: 15 }, () => ({
  id: generateRandomId(),
  logo: generateRandomLogo(),
  company_name: generateRandomCompanyName(),
  description: generateRandomDescription(),
  address: generateRandomAddress(),
}));

export default members;
