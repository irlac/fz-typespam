// Import required modules
let badusb = require("badusb");
let keyboard = require("keyboard");

// Prompt for number of iterations
let i = parse_int(keyboard.text(4+1, "5", true));
print(to_string(i) + " iterations.")
delay(500);

// Prompt for message to spam
let result = keyboard.text(12+1, "Test", true);
print("Message is \"" + result + "\".");

// Initialize BadUSB
badusb.setup({ vid: 0xAAAA, pid: 0xBBBB, mfr_name: "Flipper", prod_name: "Zero" });
print("Waiting for connection...");

// Keep connected
while (!badusb.isConnected()) {
    delay(1000);
}

// Loop to print spam message
while (i > 0) {
    print(to_string(i) + "...");
    badusb.println(result);
    delay(200);
    i -= 1;
}

// Disconnect BadUSB
badusb.quit();

print("Done.");