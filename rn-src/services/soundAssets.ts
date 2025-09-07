// Sound asset mappings for React Native
// This maps sound IDs to their require() statements for bundle loading

export const soundAssets: Record<string, any> = {
  // Nature sounds
  'river': require('../../assets/sounds/nature/river.mp3'),
  'waves': require('../../assets/sounds/nature/waves.mp3'),
  'campfire': require('../../assets/sounds/nature/campfire.mp3'),
  'wind': require('../../assets/sounds/nature/wind.mp3'),
  'howling-wind': require('../../assets/sounds/nature/howling-wind.mp3'),
  'wind-in-trees': require('../../assets/sounds/nature/wind-in-trees.mp3'),
  'waterfall': require('../../assets/sounds/nature/waterfall.mp3'),
  'walk-in-snow': require('../../assets/sounds/nature/walk-in-snow.mp3'),
  'walk-on-leaves': require('../../assets/sounds/nature/walk-on-leaves.mp3'),
  'walk-on-gravel': require('../../assets/sounds/nature/walk-on-gravel.mp3'),
  'droplets': require('../../assets/sounds/nature/droplets.mp3'),
  'jungle': require('../../assets/sounds/nature/jungle.mp3'),

  // Rain sounds
  'light-rain': require('../../assets/sounds/rain/light-rain.mp3'),
  'heavy-rain': require('../../assets/sounds/rain/heavy-rain.mp3'),
  'thunder': require('../../assets/sounds/rain/thunder.mp3'),
  'rain-on-window': require('../../assets/sounds/rain/rain-on-window.mp3'),
  'rain-on-tent': require('../../assets/sounds/rain/rain-on-tent.mp3'),
  'rain-on-car-roof': require('../../assets/sounds/rain/rain-on-car-roof.mp3'),
  'rain-on-leaves': require('../../assets/sounds/rain/rain-on-leaves.mp3'),
  'rain-on-umbrella': require('../../assets/sounds/rain/rain-on-umbrella.mp3'),

  // Urban sounds  
  'traffic': require('../../assets/sounds/urban/traffic.mp3'),
  'busy-street': require('../../assets/sounds/urban/busy-street.mp3'),
  'highway': require('../../assets/sounds/urban/highway.mp3'),
  'road': require('../../assets/sounds/urban/road.mp3'),
  'crowd': require('../../assets/sounds/urban/crowd.mp3'),
  'fireworks': require('../../assets/sounds/urban/fireworks.mp3'),
  'ambulance-siren': require('../../assets/sounds/urban/ambulance-siren.mp3'),

  // Transport sounds
  'train': require('../../assets/sounds/transport/train.mp3'),
  'inside-a-train': require('../../assets/sounds/transport/inside-a-train.mp3'),
  'airplane': require('../../assets/sounds/transport/airplane.mp3'),
  'sailboat': require('../../assets/sounds/transport/sailboat.mp3'),
  'rowing-boat': require('../../assets/sounds/transport/rowing-boat.mp3'),
  'submarine': require('../../assets/sounds/transport/submarine.mp3'),

  // Animals sounds
  'cat-purring': require('../../assets/sounds/animals/cat-purring.mp3'),
  'crickets': require('../../assets/sounds/animals/crickets.mp3'),
  'frog': require('../../assets/sounds/animals/frog.mp3'),
  'horse-gallop': require('../../assets/sounds/animals/horse-gallop.mp3'),
  'owl': require('../../assets/sounds/animals/owl.mp3'),
  'seagulls': require('../../assets/sounds/animals/seagulls.mp3'),
  'whale': require('../../assets/sounds/animals/whale.mp3'),
  'wolf': require('../../assets/sounds/animals/wolf.mp3'),
  'birds': require('../../assets/sounds/animals/birds.mp3'),
  'beehive': require('../../assets/sounds/animals/beehive.mp3'),
  'chickens': require('../../assets/sounds/animals/chickens.mp3'),
  'cows': require('../../assets/sounds/animals/cows.mp3'),
  'crows': require('../../assets/sounds/animals/crows.mp3'),
  'dog-barking': require('../../assets/sounds/animals/dog-barking.mp3'),
  'sheep': require('../../assets/sounds/animals/sheep.mp3'),
  'woodpecker': require('../../assets/sounds/animals/woodpecker.mp3'),

  // Things sounds (lofi/home/noises)
  'keyboard': require('../../assets/sounds/things/keyboard.mp3'),
  'clock': require('../../assets/sounds/things/clock.mp3'),
  'dryer': require('../../assets/sounds/things/dryer.mp3'),
  'washing-machine': require('../../assets/sounds/things/washing-machine.mp3'),
  'ceiling-fan': require('../../assets/sounds/things/ceiling-fan.mp3'),
  'boiling-water': require('../../assets/sounds/things/boiling-water.mp3'),
  'bubbles': require('../../assets/sounds/things/bubbles.mp3'),
  'morse-code': require('../../assets/sounds/things/morse-code.mp3'),
  'paper': require('../../assets/sounds/things/paper.mp3'),
  'singing-bowl': require('../../assets/sounds/things/singing-bowl.mp3'),
  'slide-projector': require('../../assets/sounds/things/slide-projector.mp3'),
  'tuning-radio': require('../../assets/sounds/things/tuning-radio.mp3'),
  'typewriter': require('../../assets/sounds/things/typewriter.mp3'),
  'vinyl-effect': require('../../assets/sounds/things/vinyl-effect.mp3'),
  'wind-chimes': require('../../assets/sounds/things/wind-chimes.mp3'),
  'windshield-wipers': require('../../assets/sounds/things/windshield-wipers.mp3'),

  // Places sounds
  'airport': require('../../assets/sounds/places/airport.mp3'),
  'cafe': require('../../assets/sounds/places/cafe.mp3'),
  'carousel': require('../../assets/sounds/places/carousel.mp3'),
  'church': require('../../assets/sounds/places/church.mp3'),
  'construction-site': require('../../assets/sounds/places/construction-site.mp3'),
  'crowded-bar': require('../../assets/sounds/places/crowded-bar.mp3'),
  'laboratory': require('../../assets/sounds/places/laboratory.mp3'),
  'laundry-room': require('../../assets/sounds/places/laundry-room.mp3'),
  'library': require('../../assets/sounds/places/library.mp3'),
  'night-village': require('../../assets/sounds/places/night-village.mp3'),
  'office': require('../../assets/sounds/places/office.mp3'),
  'restaurant': require('../../assets/sounds/places/restaurant.mp3'),
  'subway-station': require('../../assets/sounds/places/subway-station.mp3'),
  'supermarket': require('../../assets/sounds/places/supermarket.mp3'),
  'temple': require('../../assets/sounds/places/temple.mp3'),
  'underwater': require('../../assets/sounds/places/underwater.mp3'),

  // Additional root sounds
  'alarm': require('../../assets/sounds/alarm.mp3'),
  'silence': require('../../assets/sounds/silence.mp3'),
};

// Helper function to get asset for a sound ID
export function getSoundAsset(soundId: string): any | null {
  return soundAssets[soundId] || null;
}