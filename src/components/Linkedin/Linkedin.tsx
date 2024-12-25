import React from "react";
import styles from "./Linkedin.module.css";
import { LinkedinType } from "@/utils/types";
import { Skeleton } from "@nextui-org/skeleton";

type LinkedinProps = {
  linkedinResults?: LinkedinType;
};

const Linkedin = ({ linkedinResults }: LinkedinProps) => {
  return (
    <>
      {linkedinResults ? (
        <div className={styles.linkedinContainer}>
          <div className={styles.profileHeader}>
            <div className={styles.profileImageContainer}>
              <img
                src={linkedinResults.person_data.photoUrl}
                alt={`${linkedinResults.person_data.firstName} ${linkedinResults.person_data.lastName}`}
                className={styles.profileImage}
              />
            </div>
            <div className={styles.profileDetails}>
              <div className={styles.profileName}>
                {linkedinResults.person_data.firstName} {linkedinResults.person_data.lastName}
              </div>
              <div className={styles.profileHeadline}>
                {linkedinResults.person_data.headline}
              </div>
              <div className={styles.profileLocation}>
                {linkedinResults.person_data.location}
              </div>
            </div>
          </div>
          <div className={styles.profileInfo}>
            <div className={styles.companyName}>
              {linkedinResults.person_data.companyName}
            </div>
            <a
              href={linkedinResults.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.profileLink}
            >
              View LinkedIn Profile
            </a>
          </div>
        </div>
      ) : (
        <div className={styles.linkedinContainer}>
          <div className={styles.profileHeader}>
            <div className={styles.profileImageContainer}>
              <Skeleton className={styles.skeletonProfileImage} />
            </div>
            <div className={styles.profileDetails}>
              <Skeleton className={styles.skeletonProfileName} />
              <Skeleton className={styles.skeletonProfileHeadline} />
              <Skeleton className={styles.skeletonProfileLocation} />
            </div>
          </div>
          <div className={styles.profileInfo}>
            <Skeleton className={styles.skeletonCompanyName} />
            <Skeleton className={styles.skeletonProfileLink} />
          </div>
        </div>
      )}
    </>
  );
};

export default Linkedin;
