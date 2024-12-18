import React from 'react';
import { theme } from '../../../../../shared/utils/theme';
import { EmailSettings } from '../channel-settings/EmailSettings';
import { LinkedInSettings } from '../channel-settings/LinkedInSettings';
import { ColdCallSettings } from '../channel-settings/ColdCallSettings';
import { SocialSettings } from '../channel-settings/SocialSettings';
import { CommunitySettings } from '../channel-settings/CommunitySettings';
import type { Channel, ChannelSettings as ChannelSettingsType } from '../../../types/campaign';

interface ChannelSettingsProps {
  channels: Channel[];
  settings: Partial<ChannelSettingsType>;
  onChange: (settings: Partial<ChannelSettingsType>) => void;
}

export function ChannelSettings({ channels, settings, onChange }: ChannelSettingsProps) {
  const updateSettings = (channel: Channel, channelSettings: any) => {
    onChange({
      ...settings,
      [channel]: channelSettings
    });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6" style={{ color: theme.colors.text.primary }}>
        Configure Channel Settings
      </h2>
      <div className="space-y-8">
        {channels.map(channel => (
          <div key={channel}>
            {channel === 'email' && (
              <EmailSettings
                settings={settings.email}
                onChange={value => updateSettings('email', value)}
              />
            )}
            {channel === 'linkedin' && (
              <LinkedInSettings
                settings={settings.linkedin}
                onChange={value => updateSettings('linkedin', value)}
              />
            )}
            {channel === 'cold-call' && (
              <ColdCallSettings
                settings={settings['cold-call']}
                onChange={value => updateSettings('cold-call', value)}
              />
            )}
            {channel === 'social' && (
              <SocialSettings
                settings={settings.social}
                onChange={value => updateSettings('social', value)}
              />
            )}
            {channel === 'community' && (
              <CommunitySettings
                settings={settings.community}
                onChange={value => updateSettings('community', value)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}