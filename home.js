// 10 Common Web Vulnerabilities

// 1. SQL Injection
function sqlInjection(username) {
  const query = "SELECT * FROM users WHERE username = '" + username + "'";
  // Vulnerable: attacker can input: ' OR '1'='1
  database.execute(query);
}

// 2. Cross-Site Scripting (XSS)
function xssVulnerability(userInput) {
  document.getElementById('content').innerHTML = userInput;
  // Vulnerable: userInput can contain: <script>alert('hacked')</script>
}

// 3. Cross-Site Request Forgery (CSRF)
// No token validation - attacker can forge requests
function transferMoney(amount, recipientId) {
  fetch('/api/transfer', { method: 'POST', body: JSON.stringify({ amount, recipientId }) });
  // Vulnerable: no CSRF token check
}

// 4. Broken Authentication
function login(username, password) {
  // Vulnerable: passwords stored in plain text
  const user = database.findUser(username, password);
  // No rate limiting on login attempts
}

// 5. Sensitive Data Exposure
function getUser(userId) {
  return database.query("SELECT * FROM users WHERE id = " + userId);
  // Vulnerable: returns all fields including passwords, SSN, etc.
}

// 6. XML External Entity (XXE)
function parseXML(xmlString) {
  const parser = new DOMParser();
  return parser.parseFromString(xmlString, 'text/xml');
  // Vulnerable: can load external entities
}

// 7. Broken Access Control
function deleteUser(userId) {
  // Vulnerable: no permission check
  database.delete("DELETE FROM users WHERE id = " + userId);
}

// 8. Security Misconfiguration
const config = {
  debugMode: true, // Vulnerable: debug enabled in production
  apiKey: 'hardcoded_secret_key_123',
  cors: '*' // Vulnerable: allows all origins
};

// 9. Using Components with Known Vulnerabilities
// Example: using outdated library versions
import oldLibrary from 'vulnerable-package@1.0.0'; // Vulnerable version

// 10. Insufficient Logging & Monitoring
function criticalOperation(data) {
  database.updateCriticalData(data);
  // Vulnerable: no logging, cannot detect suspicious activities
}
