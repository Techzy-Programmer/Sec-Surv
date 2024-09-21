"use client";

import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';

import { isDASHProvider, MediaPlayer, MediaProvider, MediaProviderAdapter } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import { useEffect, useState } from 'react';

const BUFF_CAP_SEC = 6;
const TOLERANCE_FACTOR = 1.8; // (1.1 to 1.8) Higher value means more tolerance to network fluctuations lower means more real-time playback

export function Video() {
  const [isClient, setIsClient] = useState(false);

  function onProviderChange(
    provider: MediaProviderAdapter | null,
  ) {
    if (isDASHProvider(provider)) {
      provider.config = {
        streaming: {
          buffer: {
            bufferPruningInterval: Math.floor(BUFF_CAP_SEC / 2),
            bufferTimeAtTopQuality: BUFF_CAP_SEC,
            reuseExistingSourceBuffers: true,
            stableBufferTime: BUFF_CAP_SEC,
            stallThreshold: 0,
          },
          delay: {
            liveDelay: Math.ceil(BUFF_CAP_SEC * TOLERANCE_FACTOR),
            useSuggestedPresentationDelay: false
          },
          gaps: {
            enableStallFix: true,
            jumpLargeGaps: true,
            smallGapLimit: 0.5,
            jumpGaps: true,
            threshold: 0.1,
          },
          utcSynchronization: {
            maximumAllowedDrift: Math.ceil(BUFF_CAP_SEC * TOLERANCE_FACTOR),
            useManifestDateHeaderTimeSource: true,
            timeBetweenSyncAttempts: 30000,
            enabled: true,
          },
          protection: {
            keepProtectionMediaKeys: false,
            ignoreEmeEncryptedEvent: true
          }
        },
        errors: {
          recoverAttempts: {
            mediaErrorDecode: 3
          }
        }
      };
    }
  }

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Avoid rendering on the server
  }

  return (
    <MediaPlayer load='play' title="Sprite Fight" src="http://192.168.107.249:6619/manifest.mpd" onProviderChange={onProviderChange}>
      <MediaProvider />
      <DefaultVideoLayout thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt" icons={defaultLayoutIcons} />
    </MediaPlayer>
  )
}
