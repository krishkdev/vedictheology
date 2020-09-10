import React from 'react';
import CarouselContent from './CarouselContent';
import FlexContent from './FlexContent';

var data = [
    {
      id: 1,
      title:"Why Vedas",
      description: `The Vedas are apourusheyam (not man-made). They are the
      universal truth. Like how the word and its meaning are
      inseparable and the meaning tries to explain the nature and
      characteristics of the word, the Vedas as the phonetic form of
      the Supreme. At the same time, the meaning of the word cannot
      explain or describe the entire nature and attributes of the word
      completely. For example, if we say an elephant, the meaning of
      elephant is known to everyone. However, the word elephant cannot
      describe the animal elephant in its entirety. In other words the
      comprehensible word cannot explain the nature of the
      incomprehensible attributes of the object. Similarly, the Vedas
      are the comprehensible from of the incomprehensible Supreme`,
    },
    {
      id: 2,
      title:"Types of Vedas",
      description: `There are four Vedas: the Rigveda, the Yajurveda, the Samaveda and the Atharvaveda. Each Veda has four subdivisions – the Samhitas (mantras and benedictions), the Aranyakas (text on rituals, ceremonies, sacrifices and symbolic-sacrifices), the Brahmanas (commentaries on rituals, ceremonies and sacrifices), and the Upanishads (texts discussing meditation, philosophy and spiritual knowledge). Some scholars add a fifth category – the Upasanas (worship). The texts of the Upanishads discuss ideas akin to the heterodox sramana-traditions.`,
    },
    {
      id: 3,
      title:"Origin of Vedas",
      description: `The Vedas have been orally transmitted since the 2nd millennium BCE with the help of elaborate mnemonic techniques.The mantras, the oldest part of the Vedas, are recited in the modern age for their phonology rather than the semantics, and are considered to be primordial rhythms of creation, preceding the forms to which they refer.By reciting them the cosmos is regenerated,by enlivening and nourishing the forms of creation at their base.`,
    }
  ];
  

const HomePage = () => {
    return (
        <>
        <CarouselContent />
        <FlexContent data={data} />
        </>
    )
}
export default HomePage;