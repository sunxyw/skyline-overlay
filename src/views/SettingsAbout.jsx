import React, { useCallback, useMemo } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import { latest } from '@/assets/changelog';
import useStore from '@/hooks/useStore';

const SettingsAbout = observer(() => {
  const { t } = useTranslation();

  /**
   * @param {Date} date
   * @param {string} lang
   */
  const toDate = useCallback((date, lang) => {
    try {
      return date.toLocaleString(lang);
    } catch {
      return date.toLocaleString();
    }
  }, []);

  const {
    settings: { lang },
  } = useStore();
  const date = useMemo(() => toDate(new Date(latest.date), lang), [lang, toDate]);

  return (
    <div className='settings-about'>
      {/*
    <div className='settings-row'>
      <span className='settings-title'>{t('Thanks for Using')}</span>
    </div>
    */}
      <div className='settings-row'>
        <span className='settings-title'>
          <Trans i18nKey='Need Help'>
            We need
            <a
              className='s-link'
              href='https://github.com/dsrkafuu/skyline-overlay#add-translations'
              target='_blank'
              rel='noopener noreferrer'
            >
              help
            </a>
            from more community translators!
          </Trans>
        </span>
      </div>
      <div className='settings-row'>
        <span className='settings-title'>
          <Trans i18nKey='Request Issue'>
            Please
            <a
              className='s-link'
              href='https://github.com/dsrkafuu/skyline-overlay/issues'
              target='_blank'
              rel='noopener noreferrer'
            >
              raise an issue
            </a>
            if you have questions or ideas.
          </Trans>
        </span>
      </div>
      <div className='settings-row'>
        <span className='settings-title'>{t('Release Date')}</span>
        <span className='settings-title'>{date}</span>
      </div>
      <div className='settings-row'>
        <span className='settings-title'>{`Copyright ${new Date().getFullYear()} MPL-2.0 License`}</span>
        <a className='s-link' href='https://dsrkafuu.su' target='_blank' rel='noopener noreferrer'>
          DSRKafuU
        </a>
      </div>
    </div>
  );
});
SettingsAbout.displayName = 'SettingsAbout';

export default SettingsAbout;
