function personalizeGreeting(): void {
    const teacherName = (document.getElementById('teacherName') as HTMLInputElement).value;
    (document.getElementById('greeting') as HTMLElement).textContent = `Happy Teachers Day To ${teacherName} 🌷`;
    (document.getElementById('from') as HTMLElement).textContent = `From Noor Fatima ✨`;
  }
  