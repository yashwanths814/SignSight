# ✋ SignSight

**AI-powered gesture control for browsers. No mouse. No keyboard. Just you.**


## 🚀 Inspiration

With the rise of gesture-based interfaces and the growing need for hygienic, accessible tech, **SignSight** was created to reimagine how users interact with their monitors. Our goal: simple hand signs to perform everyday actions—perfect for touch-free computing and inclusive design.


## 🧠 What It Does

SignSight is a **web-based application** that uses your **webcam** to detect and interpret hand gestures in real time. Recognized gestures trigger system-level actions such as:

- Scrolling webpages
- Switching browser tabs
- Adjusting volume
- Brightness control
- Even initiating shutdown!

All within the browser — no downloads, no backend setup.


## 🎮 Gesture Control Guide

### 🚦 Getting Started

1. **Allow camera access** when prompted by your browser  
2. **Position your hand clearly** within the webcam view  
3. **Hold gestures for 1–2 seconds**  
4. **Wait for recognition** and action execution  
5. **No gesture detected?** — System auto-stops interaction  

### ✋ Hand Gesture Reference

| Gesture         | How to Perform                             | Action Triggered      |
|----------------|---------------------------------------------|-----------------------|
| 🖐️ Open Palm    | Spread fingers, show palm to the camera    | 🔊 Volume Up          |
| ✊ Closed Fist   | Tight fist with all fingers closed         | 🔉 Volume Down        |
| 👍 Thumbs Up     | Clear thumbs up gesture                    | 🌞 Brightness Up      |
| 👈 Swipe Left    | Move open hand right ➡ left across screen | ⬅ Previous Tab        |
| 👉 Swipe Right   | Move open hand left ➡ right across screen | ➡ Next Tab            |
| 👊 Punch Forward | Fist punched toward the camera             | ⏻ System Shutdown     |



## 🛠️ How We Built It

- **Frontend**: HTML, CSS, JavaScript  
- **Real-Time Gesture Detection**: [MediaPipe Hands](https://google.github.io/mediapipe/solutions/hands.html) + [TensorFlow.js](https://www.tensorflow.org/js)  
- **UI/UX**: Responsive layout, smooth CSS animations, intuitive feedback  
- **Architecture**: Single-page, browser-native app — no server required  

Gesture classification and trigger mappings handled client-side for minimal latency.


## 🏆 Accomplishments

- Functional gesture control that runs entirely in-browser  
- Seamless blend of computer vision and responsive UI  
- No backend dependencies — completely client-side  
- Optimized for smooth, low-latency interaction  


## 🌐 Live Demo

Experience SignSight in action:  
🔗 **[SignSight – Try It Now](https://yashwanths814.github.io/SignSight/)**

> No installation required — just open in your browser and allow webcam access.


## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

