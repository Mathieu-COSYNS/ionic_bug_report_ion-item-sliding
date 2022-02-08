import {
  IonApp,
  IonButton,
  IonContent,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  setupIonicReact,
} from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

import { useRef } from "react";

setupIonicReact();

const App: React.FC = () => {
  const slidingRef = useRef<HTMLIonItemSlidingElement>(null);

  const handleClick = () => {
    slidingRef.current?.close();
    // This will allow users to slide the item
  };

  return (
    <IonApp>
      <IonContent>
        <IonButton onClick={handleClick}>Reproduce Bug</IonButton>
        <IonList>
          <IonItemSliding ref={slidingRef} disabled={true}>
            <IonItem>
              <IonLabel>Item</IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption onClick={() => console.log("unread clicked")}>
                Unread
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        </IonList>
      </IonContent>
    </IonApp>
  );
};

export default App;
