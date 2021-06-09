import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                        src={require('./../../assets/images/team/connor-tinker-cs.webp')}
                        alt="Connor Tinker"
                        width={512}
                        height={512} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Connor Tinker
                    </h4>
                  <h5>Co-founder</h5>
                  <p className="m-0 text-sm">
                    Tinker is a planetary scientist fascinated by the mysteries of our cosmos. On Earth, Connor is working to help make culture and education accessible to all of humanity.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/team/benjamin-arntzen-cs.webp')}
                      alt="Benjamin Arntzen"
                      width={512}
                      height={512} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Benjamin Arntzen
                    </h4>
                  <h5>Founder</h5>
                  <p className="m-0 text-sm">
                    Benjamin founded Riff.CC in 2010, after becoming frustrated at the lack of options for sharing, exploring and downloading free culture. They build robots that help Riff.CC scale.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                        src={require('./../../assets/images/team/michael-collins-cs.webp')}
                        alt="Michael Collins"
                        width={512}
                        height={512} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Michael Collins
                  </h4>
                  <h5>Co-founder</h5>
                  <p className="m-0 text-sm">
                    Michael is an open source enthusiast, and explores new and emerging technologies. He works on infrastructure and user experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                        src={require('./../../assets/images/team/dave-duval-cs.webp')}
                        alt="Dave Duval"
                        width={512}
                        height={512} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Dave Duval
                  </h4>
                  <h5>Co-founder</h5>
                  <p className="m-0 text-sm">
                    Insert bio here.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/team/kieran-mesquita-cs.webp')}
                      alt="Kieran Mesquita"
                      width={512}
                      height={512} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Kieran Mesquita
                    </h4>
                  <h5>Co-founder</h5>
                  <p className="m-0 text-sm">
                    "I am a Programmer, Photographer, and INTJ. I build things." <br />
                    Kieran works on proving and improving the core technology that powers Riff.CC.
                    </p>
                </div>
              </div>
            </div>


            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                        src={require('./../../assets/images/team/nick-bannon-cs.webp')}
                        alt="Nick Bannon"
                        width={512}
                        height={512} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Nick Bannon
                  </h4>
                  <h5>Co-founder</h5>
                  <p className="m-0 text-sm">
                    Nick is a systems integrator, standing on the shoulders of giants. He helps ensure we make technically sound decisions and collaborate with the free software community.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                        src={require('./../../assets/images/team/phoebe-sleet-cs.webp')}
                        alt="Phoebe Sleet"
                        width={512}
                        height={512} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  {/* ✊ */}
                  <h4 className="mt-0 mb-8">
                    Phoebe Sleet
                  </h4>
                  <h5>Policy</h5>
                  <p className="m-0 text-sm">
                    Phoebe helps ensure we are behaving ethically as an organisation - and as a free platform - and helps make key policy decisions.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                        src={require('./../../assets/images/team/sphirye-cs.webp')}
                        alt="Sphirye"
                        width={512}
                        height={512} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Sphirye
                  </h4>
                  <h5>Developer</h5>
                  <p className="m-0 text-sm">
                    Sphirye works on Pioneer - the future face of Riff.CC - as well as our app experiences across platforms.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                        src={require('./../../assets/images/team/alyssa-mcaleese-cs.webp')}
                        alt="Alyssa McAleese"
                        width={512}
                        height={512} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Alyssa McAleese
                  </h4>
                  <h5>Content</h5>
                  <p className="m-0 text-sm">
                    Alyssa is a teacher who is interested in making knowledge accessible to everyone. She finds books and other media we can share to make that happen.
                  </p>
                </div>
              </div>
            </div>


            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                        src={require('./../../assets/images/team/daniela-baptista-cs.webp')}
                        alt="Daniela Baptista"
                        width={512}
                        height={512} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Daniela Baptista
                  </h4>
                  <h5>Content</h5>
                  <p className="m-0 text-sm">
                    Daniela helps find content for the platform.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                        src={require('./../../assets/images/team/lazar-zeljic-cs.webp')}
                        alt="Lazar Zeljic"
                        width={512}
                        height={512} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Lazar Zeljic
                  </h4>
                  <h5>Content</h5>
                  <p className="m-0 text-sm">
                    Lazar is a legal assistant who helps find content for the platform, and is exploring the tech industry. <br /> A national level volleyball referee, Lazar loves everything related to new technologies.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                        src={require('./../../assets/images/team/dinesh-kamath-cs.webp')}
                        alt="Dinesh Kamath"
                        width={512}
                        height={512} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Dinesh Kamath
                  </h4>
                  <h5>Content</h5>
                  <p className="m-0 text-sm">
                    Dinesh is a Mass Media graduate exploring different options and the world of free culture. Dinesh has a background in sales and helps find marketable content.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
