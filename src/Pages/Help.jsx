import './VideoBackground.css';
import * as React from 'react';
import {styled} from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled(MuiAccordion)(({theme}) => ({
    border: `1px solid ${theme.palette.divider}`,
    backgroundColor: 'transparent',
    transition: 'background-color 0.3s ease',
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{fontSize: '0.9rem'}}/>}
        {...props}
    />
))(({theme}) => ({
    backgroundColor: 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({theme}) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const faqs = [
    ["1. What is CyberStudio?", "CyberStudio is a platform where you can access various programming resources, projects, and tutorials."],
    ["2. How can I contact CyberStudio?", "You can contact us via email at tokyintelligentgamer@gmail.com or through the contact page on our website."],
    ["3. Do I need to create an account to use CyberStudio?", "No, you do not need to create an account to access our resources."],
    ["4. Is CyberStudio free to use?", "Yes, CyberStudio offers free access to many of its resources."],
    ["5. What types of resources are available on CyberStudio?", "You can find programming tutorials, project examples, and helpful articles on various topics."],
    ["6. Can I submit my own content to CyberStudio?", "Currently, we do not accept user submissions."],
    ["7. How often is the content updated?", "We regularly update our content to ensure it remains current and relevant."],
    ["8. What programming languages do you cover?", "We cover a wide range of programming languages, including HTML, CSS, JavaScript, Python, Java, and more."],
    ["9. Can I use the resources for commercial projects?", "Most of our resources can be used for commercial projects, but please check the specific terms for each resource."],
    ["10. How can I report a problem with the website?", "You can report any issues through our contact page."],
    ["11. Are there any tutorials for beginners?", "Yes, we have a dedicated section for beginners covering the basics of programming."],
    ["12. What should I do if I forget my password?", "Since there is no account system, you don't need to worry about passwords."],
    ["13. Is there a mobile version of the site?", "Yes, CyberStudio is optimized for mobile devices."],
    ["14. Can I download resources from CyberStudio?", "Yes, many resources can be downloaded directly from the website."],
    ["15. How do I find a specific resource?", "You can use the search function on our website to find specific topics or resources."],
    ["16. Do you offer any certifications?", "Currently, we do not offer certifications for our resources."],
    ["17. Can I provide feedback on the content?", "Yes, we welcome feedback through our contact page."],
    ["18. Are the tutorials step-by-step?", "Yes, our tutorials are designed to be easy to follow with step-by-step instructions."],
    ["19. Can I access CyberStudio from anywhere?", "Yes, you can access the site from any device with an internet connection."],
    ["20. Are there any prerequisites for your courses?", "Most courses are beginner-friendly, but some may require basic programming knowledge."],
    ["21. How do I stay updated with new content?", "You can subscribe to our newsletter to receive updates about new content."],
    ["22. Do you have a community forum?", "Currently, we do not have a community forum."],
    ["23. What is the best way to learn programming?", "The best way to learn programming is through practice and using resources like our tutorials."],
    ["24. Do you provide support for coding issues?", "please visit our products tab"],
    ["25. Can I link to CyberStudio from my own site?", "Yes, you can link to our site as long as you provide proper attribution."],
    ["26. Are there any ads on the site?", "Nope!"],
    ["27. How can I improve my coding skills?", "Regular practice and using resources like CyberStudio will help you improve."],
    ["28. Can I access the site offline?", "No, you need an internet connection to access CyberStudio."],
    ["29. Is there a newsletter I can subscribe to?", "Yes, you can subscribe to our newsletter for updates."],
    ["30. What if I find a broken link?", "Please report any broken links through our contact page."],
    ["31. Are the resources suitable for kids?", "Yes, many resources are suitable for kids and beginners."],
    ["32. How can I learn about advanced topics?", "We offer resources on advanced topics, which can be found in our specialized sections."],
    ["33. Can I share the resources with others?", "Yes, you can share our resources as long as you provide proper attribution."],
    ["34. What are your most popular tutorials?", "You can find our most popular tutorials on the homepage."],
    ["35. Do you have a FAQ section?", "Yes, this is our FAQ section."],
    ["36. Can I print the tutorials?", "Yes, you can print our tutorials for offline reading."],
    ["37. Do you provide code examples?", "Yes, all of our tutorials include code examples."],
    ["38. How do I report inappropriate content?", "Please report inappropriate content through our contact page."],
    ["39. Are your resources free of copyright?", "We strive to provide original content or properly attributed resources."],
    ["40. Can I suggest a topic for a tutorial?", "Yes, you can suggest topics through our contact page."],
    ["41. How do I change my subscription preferences?", "Since there's no account system, you don't need to manage subscriptions."],
    ["42. Is the website secure?", "Yes, we take security seriously and implement best practices."],
    ["43. Are there any user reviews for the tutorials?", "Currently, we do not have a review system."],
    ["44. How do I navigate the site?", "You can use the menu and search bar to navigate easily."],
    ["45. Can I suggest improvements for the website?", "Yes, we welcome suggestions through our contact page."],
    ["46. Is there a dark mode available?", "Currently it is dark mode."],
    ["47. Do you have an API?", "Contact Us"],
    ["48. Can I use your resources for teaching?", "Yes, our resources can be used for teaching purposes."],
    ["49. What happens if I encounter an error?", "Please report errors through our contact page."],
    ["50. Do you offer personalized learning paths?", "Currently, we do not offer personalized learning paths."],
    ["51. Can I learn web development here?", "Yes, we offer many resources on web development."],
    ["52. Are there any quizzes or assessments?", "Currently, we do not have quizzes or assessments."],
    ["53. How can I find out about upcoming features?", "You can subscribe to our newsletter for updates."],
    ["54. Do you have a glossary of terms?", "Currently, we do not have a glossary, but we may add one in the future."],
    ["55. How can I improve my problem-solving skills?", "Practice coding challenges and use our resources."],
    ["56. Is there a way to donate to CyberStudio?", "Currently, we do not accept donations."],
    ["57. Can I request a specific tutorial?", "Yes, you can request specific tutorials through our contact page."],
    ["58. Are there any webinars or live sessions?", "Currently, we do not offer webinars or live sessions."],
    ["59. What is your policy on plagiarism?", "We do not condone plagiarism and encourage original work."],
    ["60. Can I learn about cybersecurity on CyberStudio?", "Yes, we have resources on cybersecurity topics."],
    ["61. How can I develop my portfolio using CyberStudio?", "You can use our resources to create projects for your portfolio."],
    ["62. Is there a way to connect with other learners?", "Currently, we do not have a way to connect learners."],
    ["63. Do you provide resources for academic purposes?", "Yes, our resources can be used for academic purposes."],
    ["64. Can I access archived tutorials?", "Currently, we do not have an archive of old tutorials."],
    ["65. How can I improve my understanding of algorithms?", "We have tutorials on algorithms and data structures."],
    ["66. Is there a way to practice coding directly on the site?", "Currently, we do not have an integrated coding practice feature."],
    ["67. Are your tutorials designed for quick learning?", "Yes, our tutorials are concise and focused."],
    ["68. How can I improve my debugging skills?", "Practice debugging through the challenges provided in our tutorials."],
    ["69. Is there a way to learn about web accessibility?", "Yes, we cover web accessibility topics in our resources."],
    ["70. Can I use your resources in a classroom setting?", "Yes, our resources are suitable for classroom use."],
    ["71. Are your resources updated based on user feedback?", "We consider user feedback for updates."],
    ["72. Can I learn about artificial intelligence here?", "Yes, we offer resources related to artificial intelligence."],
    ["73. How can I learn about version control systems?", "We have tutorials on version control systems like Git."],
    ["74. Do you provide resources for DevOps?", "Yes, we have resources related to DevOps practices."],
    ["75. What is the best way to navigate the website?", "Use the search bar and menu to find what you need quickly."],
    ["76. Can I access the website from a corporate network?", "Access may vary based on the network's security settings."],
    ["77. Is there a way to interact with the tutorial content?", "Currently, our tutorials are static and do not include interactive features."],
    ["78. What is the best way to ask questions about the tutorials?", "You can reach out via our contact page."],
    ["79. Are there any success stories from users?", "We do not currently showcase user success stories."],
    ["80. How do you select topics for tutorials?", "We select topics based on popular demand and current trends."],
    ["81. Do you provide resources in different languages?", "Currently, our resources are primarily in English."],
    ["82. Is there a mobile app for CyberStudio?", "Currently, Coming soon"],
    ["83. How do you ensure the accuracy of your tutorials?", "We regularly review content and update it for accuracy."],
    ["84. Can I access previous versions of tutorials?", "Currently, we do not offer access to previous versions."],
    ["85. Do you have a roadmap for future features?", "We may share our roadmap in upcoming newsletters."],
    ["86. Are there any tools recommended for learning?", "We may provide recommendations in future articles."],
    ["87. Can I collaborate with others on projects?", "Currently, collaboration features are not available."],
    ["88. What is the most effective way to use this site?", "Explore various resources and apply what you learn."],
    ["89. How can I enhance my web design skills?", "We have resources on web design that can help."],
    ["90. Are there resources for mobile app development?", "Yes, we cover mobile app development topics."],
    ["91. What can I do if I have a suggestion for improvement?", "You can send suggestions through our contact page."],
    ["92. Are your tutorials suitable for self-study?", "Yes, our tutorials are designed for self-study."],
    ["93. How can I track my learning progress?", "Currently, there is no progress tracking feature."],
    ["94. Are there interactive exercises available?", "Currently, we do not have interactive exercises."],
    ["95. Can I receive personalized recommendations?", "Currently, we do not offer personalized recommendations."],
    ["96. Is there a way to give feedback on specific resources?", "You can give general feedback through our contact page."],
    ["97. How often do you update the tutorials?", "We strive to keep our tutorials up to date."],
    ["98. Can I bookmark pages on the website?", "Currently, you cannot bookmark pages on our site."],
    ["99. Are there any restrictions on using the content?", "Please check specific terms for each resource."],
    ["100. Is CyberStudio a nonprofit organization?", "CyberStudio is not a nonprofit; it is a resource platform."],
    ["101. How do you ensure the quality of your content?", "We regularly review and update our content for accuracy."],
    ["102. Do you provide resources for freelance work?", "We have articles on freelance work but not specific resources."],
    ["103. Can I integrate your resources into my own projects?", "You can integrate resources as long as you provide attribution."],
    ["104. How do I improve my coding efficiency?", "Practice regularly and use our resources to learn new techniques."],
    ["105. Is there a limit to how many resources I can access?", "There is no limit to accessing our resources."],
    ["106. What should I do if I encounter a technical issue?", "Report technical issues through our contact page."],
    ["107. Can I access the site from different devices?", "Yes, you can access the site from any device."],
    ["108. Are there any networking opportunities?", "Currently, we do not provide networking opportunities."],
    ["109. Can I participate in coding competitions?", "Currently, we do not host coding competitions."],
    ["110. How do you handle user data?", "We do not collect personal data since there is no account system."]
];

const generalTechSupportFAQs = [
    ["1. How can I troubleshoot my smartphone if it won't turn on?", "Try performing a hard reset by holding the power button for 10 seconds."],
    ["2. What should I do if my laptop is overheating?", "Ensure the vents are not blocked and consider cleaning the fan."],
    ["3. How do I reset my Windows password?", "Use the password reset disk or follow the reset option on the login screen."],
    ["4. What can I do if my printer is not responding?", "Check the connections, restart the printer, and ensure it has paper and ink."],
    ["5. How do I install updates on my Android device?", "Go to Settings > System > System updates and check for updates."],
    ["6. Why is my computer running slow?", "Check for unnecessary startup programs and malware. Consider upgrading RAM."],
    ["7. How can I recover deleted files on Windows?", "Check the Recycle Bin or use file recovery software."],
    ["8. What should I do if my Wi-Fi keeps disconnecting?", "Restart your router and check for interference or outdated drivers."],
    ["9. How do I clear cache on my smartphone?", "Go to Settings > Storage and select Cached data to clear."],
    ["10. Why does my software keep crashing?", "Check for updates and ensure your system meets the software's requirements."],
    ["11. How do I change my computer's screen resolution?", "Right-click on the desktop, select Display settings, and adjust the resolution."],
    ["12. What should I do if my email is not syncing?", "Check your internet connection and ensure your account settings are correct."],
    ["13. How can I connect my smartphone to my computer?", "Use a USB cable or connect via Bluetooth or Wi-Fi."],
    ["14. What if my laptop is stuck on the boot screen?", "Try a hard reset or boot into safe mode to troubleshoot."],
    ["15. How do I uninstall an app on iOS?", "Press and hold the app icon until it wiggles, then tap the 'X' to delete."],
    ["16. What should I do if my screen is flickering?", "Update your graphics drivers and check for hardware issues."],
    ["17. How can I enable developer options on my Android device?", "Go to Settings > About phone and tap Build number seven times."],
    ["18. What to do if my USB drive is not recognized?", "Try a different USB port, check disk management, or test on another computer."],
    ["19. How do I disable startup programs in Windows?", "Open Task Manager, go to the Startup tab, and disable unnecessary programs."],
    ["20. What should I do if I can't connect to a Bluetooth device?", "Ensure Bluetooth is enabled on both devices and that they are discoverable."],
    ["21. How can I reset my Linux password?", "Boot into recovery mode and use the root shell to reset your password."],
    ["22. What should I do if my app is not installing?", "Check for sufficient storage space and ensure you're connected to the internet."],
    ["23. How do I configure my firewall settings?", "Access the firewall settings through Control Panel or System Preferences."],
    ["24. What if my keyboard is not working?", "Check the connections, try a different keyboard, and update drivers."],
    ["25. How do I optimize my smartphone's battery life?", "Reduce screen brightness, close unused apps, and turn off location services."],
    ["26. Why is my Wi-Fi network not showing up?", "Ensure the router is on and within range, and check if it's hidden."],
    ["27. How can I free up space on my hard drive?", "Uninstall unused programs, delete temporary files, and empty the Recycle Bin."],
    ["28. What should I do if my device is stuck in a boot loop?", "Try safe mode, clear cache, or perform a factory reset."],
    ["29. How do I check for malware on my computer?", "Run a full scan with your antivirus software."],
    ["30. What should I do if my screen is cracked?", "Consider replacing the screen at a repair shop."],
    ["31. How do I install software on Linux?", "Use the package manager or download the software from the official website."],
    ["32. Why is my smartphone freezing?", "Check for software updates, clear cache, or reset to factory settings."],
    ["33. How can I change my desktop background on Windows?", "Right-click on the desktop and select 'Personalize' to change the background."],
    ["34. What should I do if I can't access my files?", "Check file permissions or ensure the drive is connected."],
    ["35. How do I recover my Mac password?", "Use your Apple ID to reset it or boot into recovery mode."],
    ["36. What should I do if my printer is producing blank pages?", "Check the ink levels and ensure the cartridges are installed correctly."],
    ["37. How do I set up a VPN on my device?", "Follow the VPN provider's setup instructions or use built-in VPN settings."],
    ["38. What can I do if my touchscreen is not responding?", "Restart the device or perform a factory reset if necessary."],
    ["39. How do I update my graphics drivers?", "Download the latest drivers from the manufacturer's website or use device manager."],
    ["40. Why is my smartphone not charging?", "Check the cable and charger, or try a different power source."],
    ["41. How can I improve my internet speed?", "Try rebooting your router and contacting your ISP for upgrades."],
    ["42. What should I do if my app crashes on launch?", "Try clearing the app's cache or reinstalling it."],
    ["43. How do I enable notifications on my mobile device?", "Go to Settings > Notifications and enable notifications for the app."],
    ["44. What if my desktop icons are missing?", "Right-click on the desktop, select 'View', and check 'Show desktop icons'."],
    ["45. How do I transfer files from my smartphone to my PC?", "Use a USB cable or cloud storage services."],
    ["46. What should I do if I receive a blue screen error?", "Check for hardware issues and run a system diagnostic."],
    ["47. How do I delete my browsing history?", "Access your browser's settings and clear browsing data."],
    ["48. Why is my laptop battery not charging?", "Check the charger and try a different power outlet."],
    ["49. How do I enable dual-booting on my computer?", "Partition your hard drive and install the second OS."],
    ["50. What should I do if my software license has expired?", "Renew your license through the software provider's website."],
    ["51. How can I reset my network settings on mobile?", "Go to Settings > General Management > Reset > Reset Network Settings."],
    ["52. How do I set a static IP address?", "Access your router settings and assign a static IP under DHCP settings."],
    ["53. What if my device is running out of storage?", "Delete unnecessary files and consider upgrading your storage."],
    ["54. How do I recover files from a corrupted USB drive?", "Use recovery software or consult a professional data recovery service."],
    ["55. What should I do if my screen brightness won't adjust?", "Check your device's settings or update the display drivers."],
    ["56. How can I enable SSH on my Linux server?", "Install the SSH package and enable the SSH service."],
    ["57. Why is my audio not working on Windows?", "Check the audio settings and ensure the correct output device is selected."],
    ["58. How do I reset my smartphone to factory settings?", "Go to Settings > System > Reset options > Erase all data."],
    ["59. What if I can't connect to the internet?", "Check your Wi-Fi settings, modem, and router connections."],
    ["60. How do I manage user accounts on Windows?", "Go to Control Panel > User Accounts to add or remove users."],
    ["61. What should I do if my graphics card is not detected?", "Check connections and ensure the drivers are installed."],
    ["62. How can I install software on a Mac?", "Download the installer from the website and follow the installation prompts."],
    ["63. Why is my smartphone not receiving calls?", "Check your signal strength and ensure airplane mode is turned off."],
    ["64. How do I connect my laptop to a projector?", "Use an HDMI or VGA cable and select the appropriate input on the projector."],
    ["65. What if my laptop keyboard is malfunctioning?", "Try cleaning the keyboard and updating the drivers."],
    ["66. How can I create a new user account on Linux?", "Use the command line or the GUI to create a new user."],
    ["67. What should I do if my smartphone is stuck on the logo?", "Try performing a factory reset or boot into recovery mode."],
    ["68. How do I check system requirements for software?", "Visit the software's website for its system requirements."],
    ["69. Why does my computer keep freezing?", "Check for overheating, software conflicts, or insufficient memory."],
    ["70. How can I improve my Linux system's performance?", "Optimize startup applications and regularly update your system."],
    ["71. What should I do if I forgot my phone's PIN?", "Use the reset method or contact customer support for assistance."],
    ["72. How do I change the default browser on Windows?", "Go to Settings > Apps > Default apps and select your preferred browser."],
    ["73. Why does my smartphone keep crashing?", "Check for software updates and consider a factory reset."],
    ["74. How can I recover my account if I've lost access?", "Use recovery options provided by the service, such as email or SMS verification."],
    ["75. What if my software is not compatible with my operating system?", "Check for a compatible version or consider upgrading your OS."],
    ["76. How do I fix a corrupted Windows update?", "Use the Windows Update Troubleshooter or reset Windows Update components."],
    ["77. What should I do if my touchpad is not working?", "Check the touchpad settings and ensure it is not disabled."],
    ["78. How can I manage system resources on Linux?", "Use system monitoring tools like top or htop."],
    ["79. Why is my phone's battery draining quickly?", "Check for background apps and reduce screen brightness."],
    ["80. How do I change my email account settings?", "Access the email client settings and modify the account preferences."],
    ["81. What if I can't install updates on my Mac?", "Check available storage and ensure your Mac is connected to the internet."],
    ["82. How can I enable virtualization in the BIOS?", "Restart your computer, enter the BIOS setup, and enable virtualization."],
    ["83. What should I do if my software won't launch?", "Check for updates, reinstall the software, or consult support."],
    ["84. How do I manage firewall settings on Mac?", "Go to System Preferences > Security & Privacy > Firewall."],
    ["85. Why is my microphone not working on Windows?", "Check the audio input settings and ensure the microphone is enabled."],
    ["86. How can I disable background apps on Windows?", "Open Task Manager and disable unnecessary apps from running at startup."],
    ["87. What if my device is stuck on a black screen?", "Try a hard reset or boot into safe mode."],
    ["88. How do I set parental controls on mobile devices?", "Access the settings menu for parental controls and follow the prompts."],
    ["89. Why is my download speed slow?", "Check your internet connection and ensure no other applications are using bandwidth."],
    ["90. How can I change my password on Linux?", "Use the passwd command in the terminal to change your password."],
    ["91. What should I do if my webcam is not working?", "Check camera settings and update drivers."],
    ["92. How do I connect my smartphone to Wi-Fi?", "Go to Settings > Wi-Fi and select your network to connect."],
    ["93. What if my laptop battery is swollen?", "Stop using the laptop and consult a technician for battery replacement."],
    ["94. How can I find my IP address on Windows?", "Open Command Prompt and type 'ipconfig' to find your IP address."],
    ["95. What should I do if my software crashes frequently?", "Check for updates, and consider reinstalling or consulting support."],
    ["96. How do I enable the built-in administrator account in Windows?", "Use the command prompt with administrator privileges and type 'net user administrator /active:yes'."],
    ["97. Why does my computer take so long to boot?", "Check startup programs and consider upgrading to an SSD."],
    ["98. How can I test my internet speed?", "Use online speed test tools like Speedtest.net."],
    ["99. What should I do if my smartphone won't connect to Wi-Fi?", "Forget the network and reconnect, or restart the device."],
    ["100. How do I set up file sharing on a network?", "Enable file sharing in your operating system's network settings."],
    ["101. What if my device is running an outdated OS?", "Consider upgrading to the latest version for better security and performance."],
    ["102. How do I access advanced startup options in Windows?", "Restart your computer and press F8 or hold Shift while clicking Restart."],
    ["103. What should I do if my browser crashes frequently?", "Clear browser cache, update the browser, or disable extensions."],
    ["104. How can I recover lost data from my hard drive?", "Use data recovery software or consult a professional service."],
    ["105. How do I change my computer's language settings?", "Go to Control Panel > Region and Language settings."],
    ["106. Why is my screen resolution blurry?", "Ensure the correct display drivers are installed and check display settings."],
    ["107. How do I run a program as an administrator in Windows?", "Right-click the program and select 'Run as administrator'."],
    ["108. What should I do if my smartphone keeps crashing?", "Clear app cache, update the software, or reset to factory settings."],
    ["109. How can I disable unnecessary startup programs in Linux?", "Use the startup application manager or edit configuration files."],
    ["110. What if my computer is infected with malware?", "Run a full antivirus scan and follow up with malware removal tools."]
];

const techSupportFAQs = [
    ["1. What should I do if I can't access the website?", "Check your internet connection and try clearing your browser's cache."],
    ["2. Why does the site load slowly?", "The site may load slowly due to high traffic or your internet speed."],
    ["3. What browsers are supported?", "CyberStudio works best with modern browsers like Chrome, Firefox, and Edge."],
    ["4. How can I report a bug?", "You can report bugs through our contact page."],
    ["5. Why can't I view certain resources?", "Some resources may require specific browser settings or permissions."],
    ["6. What should I do if the page is not displaying correctly?", "Try refreshing the page or clearing your browser cache."],
    ["7. How do I clear my browser cache?", "You can clear your cache through your browser settings."],
    ["8. Why can't I download files?", "Check your browser settings and ensure that pop-ups are allowed."],
    ["9. What file formats do you support for downloads?", "We primarily support PDF and ZIP file formats for downloads."],
    ["10. How do I reset my browser settings?", "You can reset your settings through your browser's settings menu."],
    ["11. Why is my video tutorial not playing?", "Ensure you have the latest version of your browser or try a different browser."],
    ["12. What should I do if I encounter a 404 error?", "This may indicate a broken link. Please report it through our contact page."],
    ["13. Can I use CyberStudio on mobile devices?", "Yes, the website is optimized for mobile devices."],
    ["14. Why do I see a security warning when accessing the site?", "Ensure you're using HTTPS and that your browser is up to date."],
    ["15. How do I enable JavaScript in my browser?", "You can enable JavaScript through your browser settings."],
    ["16. Why am I unable to print tutorials?", "Ensure your browser allows printing and that the content is not blocked."],
    ["17. What should I do if a download fails?", "Try downloading again or check your internet connection."],
    ["18. Can I access CyberStudio using a VPN?", "Yes, but ensure your VPN is configured correctly to access the site."],
    ["19. How can I report an inappropriate comment or content?", "Report any issues through our contact page."],
    ["20. What should I do if I see an outdated tutorial?", "Please report outdated tutorials through our contact page."],
    ["21. How can I change my browser settings for better compatibility?", "Adjust settings in your browser's options menu."],
    ["22. Are there any browser extensions that might interfere with the site?", "Yes, some ad blockers or privacy extensions may block content."],
    ["23. How can I check for browser updates?", "Check the settings menu of your browser for updates."],
    ["24. What should I do if my computer freezes while using the site?", "Try closing unnecessary programs and refreshing your browser."],
    ["25. Why do videos buffer or lag?", "This may be due to your internet speed or network congestion."],
    ["26. Can I use keyboard shortcuts on the website?", "Yes, standard keyboard shortcuts should work."],
    ["27. What if I can't see the search bar?", "Ensure your browser window is maximized or try refreshing the page."],
    ["28. Why can't I find specific content?", "Try using different keywords in the search bar."],
    ["29. Can I bookmark tutorials on my browser?", "Yes, you can bookmark any page in your browser."],
    ["30. How do I manage cookies in my browser?", "You can manage cookies through your browser settings."],
    ["31. What should I do if my browser crashes?", "Restart your browser and try accessing the site again."],
    ["32. Are there any known compatibility issues?", "We strive for compatibility, but check our support page for updates."],
    ["33. Why does the site ask for permissions?", "This may be required for certain features like notifications or downloads."],
    ["34. How do I enable cookies in my browser?", "Enable cookies in the privacy settings of your browser."],
    ["35. What should I do if I can't hear audio in video tutorials?", "Check your device's audio settings and ensure the volume is up."],
    ["36. How do I reset my network settings?", "Refer to your device's instructions for resetting network settings."],
    ["37. Can I change the font size on the website?", "You can adjust font size through your browser settings."],
    ["38. Why do I see a captcha when accessing the site?", "This may occur due to unusual activity detected on your network."],
    ["39. What if I cannot use the search feature?", "Ensure JavaScript is enabled and refresh the page."],
    ["40. Are there any browser plugins I should avoid?", "Ad blockers or privacy plugins may interfere with site functionality."],
    ["41. How can I clear cookies in my browser?", "You can clear cookies through your browser settings."],
    ["42. Can I use CyberStudio offline?", "No, an internet connection is required to access the site."],
    ["43. Why can't I submit feedback?", "Ensure that all required fields are filled out in the feedback form."],
    ["44. What should I do if a page takes too long to load?", "Try refreshing the page or check your internet connection."],
    ["45. How do I change my default browser?", "Refer to your operating system's instructions for changing default applications."],
    ["46. Can I use keyboard shortcuts to navigate the site?", "Yes, common keyboard shortcuts should work."],
    ["47. How do I disable pop-up blockers?", "You can disable pop-up blockers in your browser settings."],
    ["48. Why does my browser say 'not secure'?", "Ensure you're using HTTPS and your browser is updated."],
    ["49. What if I experience a redirect issue?", "Clear your cache and check your browser for unwanted extensions."],
    ["50. How do I know if my browser is compatible?", "We recommend using the latest versions of modern browsers."],
    ["51. Can I change the language of the site?", "Currently, the site is only available in English."],
    ["52. Why are some resources unavailable?", "Certain resources may be temporarily unavailable due to maintenance."],
    ["53. What should I do if my screen goes blank?", "Refresh the page or check your internet connection."],
    ["54. Can I report a phishing attempt?", "Yes, please report any suspicious activity through our contact page."],
    ["55. Why do I need to enable JavaScript?", "JavaScript is necessary for interactive features on the site."],
    ["56. Can I resize the content on the website?", "You can zoom in and out using your browser's zoom feature."],
    ["57. How do I disable cookies in my browser?", "You can disable cookies through your browser's privacy settings."],
    ["58. What if my antivirus blocks the website?", "Check your antivirus settings to allow access to CyberStudio."],
    ["59. How do I know if my internet connection is stable?", "You can run a speed test to check your connection's stability."],
    ["60. Why can't I see images on the site?", "Ensure that your browser allows images to load."],
    ["61. Can I use this site on older devices?", "The site may work on older devices, but performance could vary."],
    ["62. How do I enable notifications for the site?", "You can enable notifications through your browser settings."],
    ["63. Why is the layout different on my device?", "The layout may vary based on your device's screen size."],
    ["64. What if I experience login issues?", "Since there's no account system, there should be no login issues."],
    ["65. Can I access the site from public Wi-Fi?", "Yes, but ensure the network is secure."],
    ["66. How do I check my browser version?", "You can check your browser version in the settings menu."],
    ["67. What should I do if my device runs out of memory?", "Close unnecessary applications and try refreshing the page."],
    ["68. Why does the website crash on my device?", "This may occur due to insufficient memory or an outdated browser."],
    ["69. How do I enable flash content?", "Most modern browsers have phased out Flash support."],
    ["70. Can I access the site from a school or workplace?", "Access may vary depending on network restrictions."],
    ["71. Why is my internet connection slow?", "This could be due to network congestion or ISP issues."],
    ["72. Can I view the site in different resolutions?", "The site is responsive and adjusts to your screen size."],
    ["73. What if my downloads are corrupt?", "Try downloading again or check your internet connection."],
    ["74. How do I improve my browsing experience?", "Keep your browser updated and clear your cache regularly."],
    ["75. Why do I see advertisements on the site?", "Advertisements help support the website's operation."],
    ["76. What should I do if I can't print a tutorial?", "Ensure your printer is set up correctly and that your browser allows printing."],
    ["77. How do I manage my browser tabs efficiently?", "Use tab management extensions or your browser's built-in features."],
    ["78. Why does the site look different on mobile?", "The site is designed to be responsive and may change layout on mobile devices."],
    ["79. Can I view tutorials offline?", "No, an internet connection is required to access content."],
    ["80. How do I optimize my device for better performance?", "Close unused applications and keep your software updated."],
    ["81. Why is the download speed slow?", "Download speed may vary based on your internet connection."],
    ["82. Can I disable site notifications?", "Yes, you can disable notifications in your browser settings."],
    ["83. What if I need help with a specific feature?", "You can find assistance in the help section or contact us."],
    ["84. How do I check for updates on CyberStudio?", "Updates are usually announced in our newsletters."],
    ["85. Can I use screen recording software while on the site?", "Yes, screen recording software should work normally."],
    ["86. What should I do if the site is down?", "Check our social media for updates or try again later."],
    ["87. Why do I need to provide feedback?", "Feedback helps us improve our resources and services."],
    ["88. How do I troubleshoot audio issues?", "Check your audio settings and ensure your browser is updated."],
    ["89. Can I access the site through an embedded browser?", "Access through embedded browsers may vary."],
    ["90. What if my browser crashes while downloading?", "Retry the download after restarting your browser."],
    ["91. How do I manage my browser extensions?", "You can manage extensions in your browser's settings menu."],
    ["92. Why can't I see the tutorial images?", "Ensure your browser allows images to load."],
    ["93. What if I have issues with third-party plugins?", "Ensure they are compatible with your browser version."],
    ["94. How do I report inappropriate content?", "Please report it through our contact page."],
    ["95. Can I view the site in dark mode?", "Currently, we do not have a dark mode option."],
    ["96. How do I troubleshoot printing issues?", "Ensure your printer is set up correctly and your browser allows printing."],
    ["97. Why do I need to allow location access?", "Some features may require location access for better functionality."],
    ["98. How do I manage downloads in my browser?", "Check the downloads section in your browser's menu."],
    ["99. Can I use the site with low-speed internet?", "Yes, but some features may be slower to load."],
    ["100. What should I do if I see a warning about mixed content?", "This occurs when secure and non-secure content is mixed; report it if it's a concern."],
    ["101. How do I enable desktop notifications?", "You can enable notifications in your browser settings."],
    ["102. Can I view content in different languages?", "Currently, all content is provided in English."],
    ["103. How do I manage my privacy settings?", "You can manage privacy settings in your browser's options."],
    ["104. What if I have a question not covered in the FAQs?", "You can contact us through our support page."],
    ["105. How do I update my browser?", "Check your browser's settings menu for update options."],
    ["106. Can I view tutorials without an internet connection?", "No, you need an internet connection to view tutorials."],
    ["107. Why does my screen flicker while using the site?", "This may be due to hardware acceleration; try disabling it in your browser settings."],
    ["108. How do I improve my internet speed?", "Contact your Internet Service Provider for assistance."],
    ["109. Can I access the site from multiple devices?", "Yes, you can access the site from any device."],
    ["110. How do I ensure my browser is secure?", "Keep your browser updated and avoid using unknown plugins."]
];

export const Help = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const renderFAQSection = (title, data, panelPrefix, style = {fontFamily: "'Arial', sans-serif"}) => (
        <div className="card mx-auto bg-transparent" style={{width: "85%", border: "none"}}>
            <h5 className="card-header text-center text-bg-info mx-auto" style={style}>{title}</h5>
            <div className="card-body">
                {data.map((value, index) => (
                    <Accordion
                        key={`${panelPrefix}-${index}`}
                        style={style}
                        className="rounded"
                        expanded={expanded === `${panelPrefix}-${index}`}
                        onChange={handleChange(`${panelPrefix}-${index}`)}
                        sx={{
                            backgroundColor: expanded === `${panelPrefix}-${index}`
                                ? 'rgba(23, 26, 28, 1)'
                                : 'transparent'
                        }}
                    >
                        <AccordionSummary
                            aria-controls={`${panelPrefix}-${index}-content`}
                            id={`${panelPrefix}-${index}-header`}
                        >
                            <Typography style={style}>{value[0]}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={style}>{value[1]}</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </div>
    );

    return (
        <div className="video-background-containers">
            <video autoPlay loop muted className="background-videos">
                <source src="https://cdn.pixabay.com/video/2022/12/11/142575-780232326_large.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>

            <div className="contentss">
                <h1
                    className="text-center mx-auto"
                    style={{
                        border: "10px solid transparent",
                        width: "20%",
                        fontFamily: "'Dancing Script', cursive",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontOpticalSizing: "auto"
                    }}
                >
                    Help Page
                </h1>

                <div className="scroll-contentss" style={{marginTop: "5%"}}>
                    {renderFAQSection("FAQs", faqs, "faqs", {
                        color: "#FF13F0",
                        fontFamily: "'Rubik Wet Paint', system-ui"
                    })}
                    {renderFAQSection("Technical Support - Web", techSupportFAQs, "web", {
                        color: "#00FFFF",
                        fontFamily: "'Tiny5', sans-serif"
                    })}
                    {renderFAQSection("Technical Support - General", generalTechSupportFAQs, "general", {
                        color: "#00FF00",
                        fontFamily: "'DynaPuff', system-ui"
                    })}
                </div>
            </div>
        </div>
    );
};

export {faqs, techSupportFAQs, generalTechSupportFAQs};