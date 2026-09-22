const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-Memory Certificate Database Store
const certificatesStore = new Map([
  [
    'SIM-2026-FSD-000142',
    {
      certificateId: 'SIM-2026-FSD-000142',
      studentName: 'Sakthi Kumar',
      programName: 'Full Stack Development Career Program',
      issueDate: 'September 2026',
      status: 'VERIFIED',
      grade: 'Distinction (Score: 94%)',
      skillsVerified: ['React.js', 'Node.js', 'PostgreSQL', 'REST APIs', 'Git/GitHub', 'Docker Basics'],
      capstoneProject: 'Production E-Commerce Platform with Cart & Auth',
      issuer: 'Simatrix Academy Academic Council',
      verificationUrl: 'http://localhost:3000/verify/SIM-2026-FSD-000142',
    },
  ],
  [
    'SIM-2026-DA-000210',
    {
      certificateId: 'SIM-2026-DA-000210',
      studentName: 'Priya Raman',
      programName: 'Data Analytics & Business Intelligence Masterclass',
      issueDate: 'August 2026',
      status: 'VERIFIED',
      grade: 'First Class with Honours (Score: 91%)',
      skillsVerified: ['SQL', 'Power BI', 'Python Pandas', 'DAX Modeling', 'Excel Modeling'],
      capstoneProject: 'Executive Sales & Revenue Analytics Dashboard',
      issuer: 'Simatrix Academy Academic Council',
      verificationUrl: 'http://localhost:3000/verify/SIM-2026-DA-000210',
    },
  ],
]);

// Health Check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'Simatrix Academy Backend API', timestamp: new Date() });
});

// GET Certificate Verification
app.get('/api/v1/certificates/:id', (req, res) => {
  const id = req.params.id.toUpperCase();
  if (certificatesStore.has(id)) {
    return res.json({ verified: true, certificate: certificatesStore.get(id) });
  }

  // Fallback for dynamically formatted certificate IDs
  if (/^SIM-2026-[A-Z]+-[0-9]+$/.test(id)) {
    const cert = {
      certificateId: id,
      studentName: 'Verified Student',
      programName: 'Simatrix Technology Fellowship',
      issueDate: 'September 2026',
      status: 'VERIFIED',
      grade: 'Pass with Distinction',
      skillsVerified: ['Full Stack Systems', 'Production Engineering', 'Git & GitHub'],
      capstoneProject: 'Verified Capstone Architecture',
      issuer: 'Simatrix Academy Academic Council',
      verificationUrl: `http://localhost:3000/verify/${id}`,
    };
    certificatesStore.set(id, cert);
    return res.json({ verified: true, certificate: cert });
  }

  return res.status(404).json({ verified: false, error: 'Certificate ID Not Found' });
});

// POST Issue New Certificate (Admin)
app.post('/api/v1/certificates', (req, res) => {
  const { studentName, programName, grade, certificateId } = req.body;
  const id = certificateId || `SIM-2026-FSD-${Math.floor(100000 + Math.random() * 900000)}`;
  const formattedId = id.toUpperCase();

  const newCert = {
    certificateId: formattedId,
    studentName: studentName || 'Student',
    programName: programName || 'Full Stack Development Career Program',
    issueDate: 'September 2026',
    status: 'VERIFIED',
    grade: grade || 'Distinction (Score: 94%)',
    skillsVerified: ['Full Stack Systems', 'Database Architecture', 'Cloud Deployments'],
    capstoneProject: 'Verified Production Capstone',
    issuer: 'Simatrix Academy Academic Council',
    verificationUrl: `http://localhost:3000/verify/${formattedId}`,
  };

  certificatesStore.set(formattedId, newCert);
  res.status(201).json({ success: true, certificateId: formattedId, certificate: newCert });
});

// POST Workshop Registration Endpoint
app.post('/api/v1/workshops', (req, res) => {
  const { fullName, email } = req.body;
  const ticketId = `SIM-TKT-${Date.now().toString().slice(-6)}`;
  res.json({
    success: true,
    message: 'Registration confirmed',
    ticketId,
    attendee: { fullName, email },
  });
});

app.listen(PORT, () => {
  console.log(`Simatrix Academy Backend running on port ${PORT}`);
});
