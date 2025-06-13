import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from 'react-native';

interface ImageCarouselProps {
  images: (string | any)[];
  interval?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, interval = 4000 }) => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(nextImage, interval);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleManualPrev = () => {
    prevImage();
    resetTimer();
  };

  const handleManualNext = () => {
    nextImage();
    resetTimer();
  };

  const currentImage = images[index];
  const imageSource = typeof currentImage === 'string' ? { uri: currentImage } : currentImage;

  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} resizeMode="contain" />

      {/* Área invisible a la izquierda */}
      <TouchableOpacity style={styles.leftTouchZone} onPress={handleManualPrev} />

      {/* Área invisible a la derecha */}
      <TouchableOpacity style={styles.rightTouchZone} onPress={handleManualNext} />
    </View>
  );
};

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: screenWidth,
    height: screenWidth * 0.6,
    borderRadius: 12,
  },
  leftTouchZone: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '40%', // puedes ajustar a '30%' o '50%' según el comportamiento deseado
    backgroundColor: 'transparent',
  },
  rightTouchZone: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: '40%',
    backgroundColor: 'transparent',
  },
});

export default ImageCarousel;
