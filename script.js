function showAlert() {
    alert('Thanks for checking out my art page!');
    console.log('User clicked the alert button on the page');
    }


function interact() {
    document.getElementById('myBtn').addEventListener('click', ()=> {
        alert('Button Clicked')
    });
    
    const text = document.getElementById('text');
    text.textContent = "Surprise, You have great taste in art 🌟.";
    text.style.color = "lightpink";
    text.style.fontsize = "20px";
    
    const info = document.getElementById('info');
    info.classList.remove('highlight');

    const image = document.getElementById('image');
    image.setAttribute ('src', 'https://images.pexels.com/photos/31098353/pexels-photo-31098353.jpeg?cs=srgb&dl=pexels-anna-vlasova-1722127157-31098353.jpg&fm=jpg&_gl=1*1codzo5*_ga*MTAyNTM0OTQyNi4xNzQ0MDEyOTQ1*_ga_8JE65Q40S6*MTc0NTQzNzczMS4xNy4xLjE3NDU0Mzc4OTcuMC4wLjA.');
    }

    
function toggleElement() {
    const tips = [
         "Don't be afraid to make mistakes—some of the best ideas start as accidents.",
         "Use contrast to guide the viewer’s eye and create visual interest.",
         "Always step back and view your work from a distance—it gives fresh perspective.",
         "Experiment with new tools or mediums regularly to grow your skills.",
         "Negative space is just as important as the subject—let your work breathe.",
         "Mix colors on the canvas for more organic, surprising results.",
         "Sketch every day, even for just 5 minutes. It adds up fast.",
         "Take inspiration from nature—it’s the most original artist out there."
        ];
    const randomIndex = Math.floor(Math.random() * tips.length);
    const randomTip = tips[randomIndex];
    
    const container = document.getElementById('extraContainer');
    container.innerHTML = `<p style="font-style: italic; color: #b30059;">${randomTip}</p>`;
   
    console.log('Displayed a new art tip:', randomTip);
}
