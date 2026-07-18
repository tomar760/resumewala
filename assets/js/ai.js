/* BanaoCV client-side AI assistant demo. It keeps the editor useful without an API key. */
(function () {
  const $ = id => document.getElementById(id);
  const value = id => ($(id)?.value || '').trim();
  const toast = (type, message) => window.RW?.Toast?.[type]?.(message);

  window.generateFromHindi = function () {
    const input = value('ai-hindi-input');
    if (!input) return toast('warning', 'Pehle apni details Hindi mein likho.');
    const role = /designer/i.test(input) ? 'UI/UX Designer' : /manager/i.test(input) ? 'Project Manager' : /teacher/i.test(input) ? 'Teacher' : 'Software Developer';
    const roleField = $('f-role'); const summary = $('f-summary');
    if (roleField && !roleField.value) roleField.value = role;
    if (summary) summary.value = `Results-focused ${role} with hands-on experience, strong communication skills, and a commitment to delivering high-quality work.`;
    if (typeof window.updateResume === 'function') window.updateResume();
    toast('success', 'AI ne aapki details se professional summary bana di! ✨');
  };

  window.analyzeScore = function () {
    const filled = ['f-fname','f-role','f-summary','f-email','f-phone'].filter(id => value(id)).length;
    const score = Math.min(95, 65 + filled * 6);
    if ($('score-num')) $('score-num').textContent = score;
    if ($('score-ring-fill')) $('score-ring-fill').style.strokeDashoffset = String(251.2 * (1 - score / 100));
    if ($('score-output')) { $('score-output').style.display = 'block'; $('score-output').innerHTML = `<strong>${score}% ready</strong><br>Summary ko results aur measurable achievements ke saath aur strong banao. Relevant job keywords zaroor add karo.`; }
    toast('success', 'Resume score analyze ho gaya!');
  };

  window.analyzeJD = function () {
    const jd = value('jd-input');
    if (!jd) return toast('warning', 'Job description paste karo pehle.');
    const words = ['React', 'JavaScript', 'Communication', 'Problem solving'].filter(w => new RegExp(w, 'i').test(jd));
    if ($('jd-output')) $('jd-output').style.display = 'block';
    if ($('jd-pills')) $('jd-pills').innerHTML = (words.length ? words : ['Teamwork', 'Leadership']).map(w => `<span class="jd-pill found">✓ ${w}</span>`).join('') + '<span class="jd-pill missing">+ Add role-specific keywords</span>';
    if ($('jd-suggestions')) $('jd-suggestions').textContent = 'Tip: Job description ke exact skills ko Summary aur Experience section mein naturally add karein.';
    toast('success', 'JD match ready hai!');
  };

  window.generateCoverLetter = function () {
    const company = value('cl-company') || 'the company'; const role = value('cl-role') || value('f-role') || 'this role';
    const name = [value('f-fname'), value('f-lname')].filter(Boolean).join(' ') || 'Candidate';
    const letter = `Dear Hiring Manager,\n\nI am excited to apply for the ${role} position at ${company}. My experience, problem-solving mindset, and commitment to quality would allow me to make a meaningful contribution to your team.\n\nI would welcome the opportunity to discuss how my skills align with your needs. Thank you for your consideration.\n\nSincerely,\n${name}`;
    if ($('cover-output-wrap')) $('cover-output-wrap').style.display = 'block';
    if ($('cover-letter-text')) $('cover-letter-text').textContent = letter;
    toast('success', 'Cover letter ready hai!');
  };
})();
