:root {
  --primary: #0a1f44;
  --secondary: #113b7a;
  --accent: #1f6feb;
  --light: #f5f7fa;
  --dark: #0d1117;
  --gray: #8b949e;
  --transition: 0.3s ease;
}

body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background: var(--primary);
  color: var(--light);
  transition: var(--transition);
  scroll-behavior: smooth;
}

body.light {
  background: var(--light);
  color: var(--dark);
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10%;
  background: rgba(0,0,0,0.2);
  backdrop-filter: blur(10px);
  position: fixed;
  width: 80%;
  top: 0;
  border-radius: 0 0 20px 20px;
}

.logo {
  font-weight: bold;
  font-size: 1.2rem;
  letter-spacing: 2px;
}

nav a {
  margin-left: 25px;
  text-decoration: none;
  color: inherit;
  transition: var(--transition);
}

nav a:hover {
  color: var(--accent);
}

.hero {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10%;
  animation: fadeIn 1s ease;
}

.hero h1 {
  font-size: 3rem;
}

.hero h2 {
  color: var(--accent);
}

.hero p {
  max-width: 600px;
  color: var(--gray);
}

.button {
  margin-top: 20px;
  padding: 12px 28px;
  background: var(--accent);
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: var(--transition);
}

.button:hover {
  transform: translateY(-3px);
}

section {
  padding: 100px 10%;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 40px;
}

.skills-grid,
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
  gap: 20px;
}

.skill-card,
.portfolio-card {
  background: var(--secondary);
  padding: 20px;
  border-radius: 15px;
  transition: var(--transition);
}

.skill-card:hover,
.portfolio-card:hover {
  transform: translateY(-5px);
  background: var(--accent);
}

footer {
  text-align: center;
  padding: 30px;
  background: rgba(0,0,0,0.2);
}

@keyframes fadeIn {
  from {opacity:0; transform: translateY(20px);}
  to {opacity:1; transform: translateY(0);}
}