const CommandSection = document.getElementById('command-section');

commands.map((command, index) => {
  const commandDiv = document.createElement('div');
  for (let i in command) {
    const heading = document.createElement('h2');
    heading.innerHTML = `👉 ` + i;
    commandDiv.appendChild(heading);
    commandDiv.classList.add('command');

    command[i].map((cmd, index) => {
      if (index % 2 == 0) {
        const usage = document.createElement('div');
        usage.classList.add('usage');
        usage.innerHTML = `
            usage : ${cmd}
            `;
        commandDiv.appendChild(usage);
      } else {
        const para = document.createElement('p');
        para.classList.add('desc');
        para.innerHTML = `
            ${cmd}
            `;
        commandDiv.appendChild(para);
      }
    });
  }
  CommandSection.appendChild(commandDiv);
});
