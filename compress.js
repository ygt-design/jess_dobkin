document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img");

  images.forEach((image) => {
    const convertDataURLToBlob = (dataURL) => {
      const byteString = atob(dataURL.split(",")[1]);
      const mimeString = dataURL.split(",")[0].split(":")[1].split(";")[0];
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      return new Blob([ab], { type: mimeString });
    };

    const handleImageLoad = () => {
      const dataURL = image.src;
      if (dataURL.startsWith("data:image/")) {
        const blob = convertDataURLToBlob(dataURL);

        // Compress the Blob object
        imageCompression(blob, {
          maxSizeMB: 0.5, // Max size in MB
          maxWidthOrHeight: 1920, // Max width or height of the output image
          useWebWorker: true, // Use web workers for better performance
        })
          .then((compressedBlob) => {
            // Convert the compressed Blob to a base64 data URL and set it as the image source
            const reader = new FileReader();
            reader.readAsDataURL(compressedBlob);
            reader.onloadend = () => {
              image.src = reader.result;
            };
          })
          .catch((error) => {
            console.error("Image compression error:", error);
          });
      }
    };

    // Wait for the image to load before processing
    image.addEventListener("load", handleImageLoad);
  });
});
