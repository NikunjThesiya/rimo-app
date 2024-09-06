"use client"
import React, { useEffect, useState } from 'react';
import styles from "@/assets/scss/components/characterContent.module.scss";
import axiosInstance from '../lib/axios';

const CharacterContent = ({ data }) => {
  const [episodes, setEpisodes] = useState([])
  const [isEpisodesLoading, setIsEpisodesLoading] = useState(false)

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        // It Will Extract all ids from the Episode Array We got from Response Data. Then we can directly pass it to the api. So in Single API call we will get all episodes details.

        // We can also call this api directly on server components to render data from server side.
        setIsEpisodesLoading(true)
        const episodeIds = data.episode.map(url => url.split('/').pop());
        const response = await axiosInstance.get(`/episode/[${episodeIds}]`);
        console.log("EPISODE RESPONSE", response)
        setEpisodes(response?.data);
      } catch (error) {
        console.error("Error fetching episodes:", error);
      } finally {
        setIsEpisodesLoading(false)
      }
    };

    fetchEpisodes();
  }, [data]);

  console.log("data", data);
  return (
    <div className={styles.characterContent}>
      <div className={styles.topContent}>
        <div className={styles.leftContent}>
          <img src={data?.image} alt={data?.name} />
        </div>
        <div className={styles.rightContent}>
          <span className={styles.badge}>{data?.gender || "UNKNOWN"}</span>
          <h1 className={styles.characterName}>{data?.name}</h1>
          <div className={styles.badges}>
            <p className={styles.badgeItem}>
              <span className={styles.badge}>Species</span> - {data?.species || "UNKNOWN"}
            </p>
            <p className={styles.badgeItem}>
              <span className={styles.badge}>Status</span> - {data?.status || "UNKNOWN"}
            </p>
            <p className={styles.badgeItem}>
              <span className={styles.badge}>Location</span> - {data?.location?.name || "UNKNOWN"}
            </p>
            <p className={styles.badgeItem}>
              <span className={styles.badge}>Type</span> - {data?.type || "UNKNOWN"}
            </p>
            <p className={styles.badgeItem}>
              <span className={styles.badge}>Type</span> - {data?.origin?.name || "UNKNOWN"}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.bottomContent}>
        <h4 className={styles.episodeHeading}>FEATURED EPISODES</h4>
        <div className={styles.episodes}>
          {
            isEpisodesLoading ? (
              <h5>Loading Episodes...</h5>
            ) : (
              episodes?.map((data) => {
                return (
                  <div key={data?.id} className={styles.singleEpisode}>
                    <span className={styles.badge}>{data?.episode || "UNAVAILABLE"}</span> - {data?.name}
                  </div>
                )
              })
            )
          }
        </div>
      </div>
    </div>
  )
}

export default CharacterContent
