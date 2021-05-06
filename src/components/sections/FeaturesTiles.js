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
                    Benjamin Wings Arntzen
                    </h4>
                  <h5>Founder</h5>
                  <p className="m-0 text-sm">
                    Benjamin founded Riff.CC in 2009, after becoming frustrated at the lack of options for sharing, exploring and downloading free culture.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                        src={require('./../../assets/images/team/logo-circle.webp')}
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
                    Connor Tinker is a rocket scientist who focuses on Riff.CC's economy, ensuring it is fair and sustainable.
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
                    Bio coming soon.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                        src={require('./../../assets/images/team/logo-circle.webp')}
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

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                        src={require('./../../assets/images/team/logo-circle.webp')}
                        alt="Raised fist"
                        width={512}
                        height={512} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Unannounced
                  </h4>
                  <h5>Co-founder</h5>
                  <p className="m-0 text-sm">
                    This team member has not been announced yet.
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
                        alt="Raised fist"
                        width={512}
                        height={512} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Phoebe Sleet
                  </h4>
                  <h5>Policy advisor</h5>
                  <p className="m-0 text-sm">
                    Phoebe helps ensure we are behaving ethically as an organisation.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                        src={require('./../../assets/images/team/logo-circle.webp')}
                        alt="Raised fist"
                        width={512}
                        height={512} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Unnanounced
                  </h4>
                  <h5>Legal</h5>
                  <p className="m-0 text-sm">
                    This staff member looks after legal matters on behalf of Riff.CC.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                        src={require('./../../assets/images/team/logo-circle.webp')}
                        alt="Raised fist"
                        width={512}
                        height={512} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Sphirye
                  </h4>
                  <h5>Web developer</h5>
                  <p className="m-0 text-sm">
                    Sphirye works on our web frontend, the face of Riff.CC.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                        src={require('./../../assets/images/team/logo-circle.webp')}
                        alt="Raised fist"
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

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
