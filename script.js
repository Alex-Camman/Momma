/* Global Styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #FF6666; /* Red-pinkish background */
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  color: white;
  text-align: center;
  margin-bottom: 20px;
}

/* Card Styles */
.card {
  width: 300px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
  transition: transform 0.5s ease;
}

.card.open {
  transform: translateY(-50px);
}

.imgBox img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 15px;
}

/* Envelope Styles */
.envelope {
  width: 250px;
  height: 180px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  transition: transform 0.5s ease;
}

.envelope .flap {
  width: 100%;
  height: 50%;
  background-color: #ffc0cb; /* Pink color for the flap */
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  transform-origin: bottom;
  transition: transform 0.5s ease;
}

.envelope.open .flap {
  transform: rotateX(-180deg);
}

.envelope .flap:before {
  content: '';
  position: absolute;
  top: -10px;
  right: 10px;
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 20px solid #ffc0cb;
}

.envelope .flap:after {
  content: '';
  position: absolute;
  bottom: -10px;
  right: 10px;
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid #ffc0cb;
}

/* Confetti animation */
.confetti {
  width: 10px;
  height: 10px;
  background-color: #f00; /* Adjust color as needed */
  position: absolute;
  z-index: 1;
  opacity: 0.8;
  border-radius: 50%;
  animation: fall 5s ease forwards;
}

@keyframes fall {
  0% {
    transform: translateY(-100vh) rotateZ(0deg);
  }
  100% {
    transform: translateY(100vh) rotateZ(720deg);
  }
}

/* Button Styles */
#confettiBtn {
  display: block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #FF6666; /* Red-pinkish button color */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

#confettiBtn:hover {
  background-color: #FF3333; /* Darker red on hover */
}