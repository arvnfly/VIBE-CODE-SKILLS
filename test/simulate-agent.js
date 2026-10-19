const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
let testErrors = 0;

function assert(condition, message) {
  if (!condition) {
    console.error(`FAIL: ${message}`);
    testErrors++;
  } else {
    console.log(`PASS: ${message}`);
  }
}

console.log('=== Running Multi-Agent Contract Simulation Tests ===\n');

// 1. Council Mode 1 (Pre-Execution Gate) Contract Validator
console.log('--- 1. Testing subagent-council Mode 1 Contract ---');
function validateCouncilMode1(content) {
  const hasPromptReview = /\[Council:\s*Prompt Review\]/i.test(content);
  const hasClarifier = /Clarifier Lens/i.test(content);
  const hasSkeptic = /Skeptic Lens/i.test(content);
  const hasMinimalist = /Minimalist Lens/i.test(content);
  const hasAcceptanceCriteria = /Acceptance Criteria/i.test(content);
  return hasPromptReview && hasClarifier && hasSkeptic && hasMinimalist && hasAcceptanceCriteria;
}

const councilArtifactPath = path.join(ROOT, 'examples', '01-full-stack-task', 'council-review.md');
const councilContent = fs.readFileSync(councilArtifactPath, 'utf8');

assert(validateCouncilMode1(councilContent), 'Council Mode 1 sample conforms to pre-execution gate schema');

// 2. Council Mode 2 (Post-Execution Audit) Contract Validator
console.log('\n--- 2. Testing subagent-council Mode 2 Contract ---');
function validateCouncilMode2(content) {
  const hasProjectReview = /\[Council:\s*Project Review\]/i.test(content);
  const hasVerdict = /Verdict[\*:]+\s*(APPROVED|REVISE|REJECTED)/i.test(content);
  const hasEvidence = /Verification Evidence/i.test(content) && /Exit code:\s*0/i.test(content);
  const hasSecurity = /Security Audit/i.test(content);
  const hasArchitecture = /Architecture Audit/i.test(content);
  return hasProjectReview && hasVerdict && hasEvidence && hasSecurity && hasArchitecture;
}

assert(validateCouncilMode2(councilContent), 'Council Mode 2 sample conforms to post-execution audit schema');

// 3. Verification Gate (Terminal Evidence & Exit Code 0) Validator
console.log('\n--- 3. Testing verification-before-completion Gate Contract ---');
function validateVerificationGate(reportContent) {
  const hasCommand = /Command:\s*`?[a-zA-Z0-9_\-\.\/ ]+`?/i.test(reportContent);
  const hasExitCode = /Exit Code:\s*0\b/i.test(reportContent);
  const hasEvidence = /Terminal Output:|Evidence:/i.test(reportContent);
  return hasCommand && hasExitCode && hasEvidence;
}

const validReport = `
## Verification Report
Command: \`npm test\`
Exit Code: 0
Terminal Output:
PASS: All 24 test suites passed.
`;

const invalidReportNoExitCode = `
## Verification Report
Command: \`npm test\`
Terminal Output: Everything looks good!
`;

const failedReportExitCode1 = `
## Verification Report
Command: \`npm test\`
Exit Code: 1
Terminal Output: 1 test failed.
`;

assert(validateVerificationGate(validReport) === true, 'Valid terminal verification report passes gate');
assert(validateVerificationGate(invalidReportNoExitCode) === false, 'Report without explicit Exit Code 0 is rejected');
assert(validateVerificationGate(failedReportExitCode1) === false, 'Report with Exit Code 1 is rejected');

// 4. UI/UX Skill WCAG AA Contrast & 8pt Grid Algorithmic Validator
console.log('\n--- 4. Testing ui-ux Algorithmic Constraints (WCAG AA & 8pt Grid) ---');

function hexToRgb(hex) {
  const cleanHex = hex.replace('#', '');
  const bigint = parseInt(cleanHex, 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255
  };
}

function getRelativeLuminance(rgb) {
  const [r, g, b] = [rgb.r, rgb.g, rgb.b].map(v => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function getContrastRatio(hex1, hex2) {
  const lum1 = getRelativeLuminance(hexToRgb(hex1));
  const lum2 = getRelativeLuminance(hexToRgb(hex2));
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

function is8ptGridValid(pixelValue) {
  // 8pt grid allows 4px half-steps for micro spacing (icons, badges, tight borders)
  return pixelValue % 4 === 0;
}

// Test dark theme tokens from ui-ux skill specification
const darkBg = '#0b0f17';
const darkTextPrimary = '#f8fafc';
const darkTextMuted = '#94a3b8';
const accessibleBrandIndigo = '#6366f1';

const primaryContrast = getContrastRatio(darkBg, darkTextPrimary);
const mutedContrast = getContrastRatio(darkBg, darkTextMuted);

assert(primaryContrast >= 7.0, `Primary text contrast ${primaryContrast.toFixed(2)}:1 exceeds WCAG AAA standard (7:1)`);
assert(mutedContrast >= 4.5, `Muted text contrast ${mutedContrast.toFixed(2)}:1 meets WCAG AA standard (4.5:1)`);

// Test spacing tokens
const spacingTokens = [4, 8, 12, 16, 24, 32, 48, 64];
const allSpacingsValid = spacingTokens.every(is8ptGridValid);
assert(allSpacingsValid, 'All spatial scale tokens strictly adhere to 8pt/4pt subgrid cadence');

// 5. Systematic Debugging Phase Traceability
console.log('\n--- 5. Testing systematic-debugging Investigation Report Contract ---');
function validateDebuggingReport(content) {
  const hasPhase1 = /Phase 1:\s*Reproduce/i.test(content);
  const hasPhase2 = /Phase 2:\s*Trace/i.test(content);
  const hasPhase3 = /Phase 3:\s*(Formulate )?Hypothesis/i.test(content);
  const hasPhase4 = /Phase 4:\s*Minimal Fix/i.test(content);
  return hasPhase1 && hasPhase2 && hasPhase3 && hasPhase4;
}

const debugArtifactPath = path.join(ROOT, 'examples', '03-systematic-debugging', 'investigation-report.md');
const debugContent = fs.readFileSync(debugArtifactPath, 'utf8');

assert(validateDebuggingReport(debugContent), 'Systematic debugging report conforms to 4-phase contract');

// 6. API Design RFC 7807 Error Envelope Contract Validator
console.log('\n--- 6. Testing api-design RFC 7807 Error Envelope Contract ---');
function validateRFC7807Error(payload) {
  return payload &&
    typeof payload.error === 'object' &&
    typeof payload.error.type === 'string' &&
    typeof payload.error.title === 'string' &&
    typeof payload.error.status === 'number' &&
    typeof payload.error.detail === 'string';
}

const sampleError = {
  error: {
    type: 'https://api.example.com/errors/not-found',
    title: 'Resource Not Found',
    status: 404,
    detail: 'User with ID usr_123 does not exist.'
  }
};
assert(validateRFC7807Error(sampleError), 'Valid RFC 7807 error payload adheres to contract');
assert(!validateRFC7807Error({ message: 'Error' }), 'Non-compliant error payload is rejected');

// 7. Security Hardening Timing-Safe Secret Validation
console.log('\n--- 7. Testing security-hardener Timing-Safe Verification ---');
const crypto = require('crypto');
function timingSafeCheck(a, b) {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}
assert(timingSafeCheck('secret_token_123', 'secret_token_123') === true, 'Matching tokens authenticate securely');
assert(timingSafeCheck('secret_token_123', 'secret_token_456') === false, 'Mismatched tokens are rejected');

// 8. Comment Minimizer Contract & Clean Code Filter
console.log('\n--- 8. Testing comment-minimizer Heuristic Filter ---');
function hasNoisyComments(codeString) {
  const noisyPatterns = [
    /\/\/\s*(increment|set|get|return|loop|check if|call|declare|init|variable|function)\b/i,
    /#\s*(increment|set|get|return|loop|check if|call|declare|init|variable|function)\b/i
  ];
  return noisyPatterns.some(p => p.test(codeString));
}

const noisyCode = 'i++; // increment i';
const cleanCode = 'const isAdult = user.age >= 18;';
const rationaleComment = '// Rationale: Upstream issue #42 requires explicit 100ms grace period';

assert(hasNoisyComments(noisyCode) === true, 'Noisy redundant comment detected by heuristic filter');
assert(hasNoisyComments(cleanCode) === false, 'Clean self-documenting code passes filter');
assert(hasNoisyComments(rationaleComment) === false, 'Non-obvious architectural rationale comment passes filter');

// Final assessment
console.log('\n======================================================');
if (testErrors > 0) {
  console.error(`Simulation suite failed with ${testErrors} error(s).`);
  process.exit(1);
} else {
  console.log('All agent contract simulation tests passed cleanly!');
}
