document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img");

  images.forEach((image) => {
    // Create a canvas and convert the image to a Blob object
    const convertImageToBlob = (imgElement) => {
      return new Promise((resolve, reject) => {
        // Create a canvas element
        const canvas = document.createElement("canvas");
        canvas.width = imgElement.naturalWidth;
        canvas.height = imgElement.naturalHeight;

        // Draw the image onto the canvas
        const ctx = canvas.getContext("2d");
        ctx.drawImage(imgElement, 0, 0);

        // Convert the canvas to a Blob
        canvas.toBlob((blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error("Conversion to Blob failed"));
          }
        }, "image/jpeg"); // Adjust the MIME type as needed
      });
    };

    // Handle the image after it loads
    image.addEventListener("load", () => {
      convertImageToBlob(image)
        .then((blob) => {
          // Now we have the Blob object of the image
          return imageCompression(blob, {
            maxSizeMB: 2, // Max size in MB
            maxWidthOrHeight: 1920, // Max width or height of the output image
            useWebWorker: true, // Use web workers for better performance
          });
        })
        .then((compressedBlob) => {
          // Read the compressed Blob and set it as the image source
          const reader = new FileReader();
          reader.readAsDataURL(compressedBlob);
          reader.onloadend = () => {
            image.src = reader.result;
          };
        })
        .catch((error) => {
          console.error("Image compression error:", error);
        });
    });
  });
});
