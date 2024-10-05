"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function personalizeGreeting() {
    const teacherName = document.getElementById('teacherName').value;
    document.getElementById('greeting').textContent = `Happy Teachers Day To ${teacherName} 🌷`;
    document.getElementById('from').textContent = `From Noor Fatima ✨`;
}
