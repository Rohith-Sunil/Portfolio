// import React, { useEffect, useRef } from "react";
// import { useAnimations, useFBX, useGLTF } from "@react-three/drei";

// const Rohith = ({ animationName = "walk", ...props }) => {
//   const group = useRef();
//   const { nodes, materials } = useGLTF("./models/rohith.glb");

//   const { animations: walkAnimation } = useFBX("./models/walk.fbx");

//   walkAnimation[0].name = "walk";
//   const { actions } = useAnimations([walkAnimation[0]], group);

//   useEffect(() => {
//     actions[animationName]?.reset().fadeIn(0.5).play();

//     return () => {
//       actions[animationName]?.fadeOut(0.5);
//     };
//   }, [animationName]);

//   return (
//     <group {...props} dispose={null} ref={group}>
//       <primitive object={nodes.Hips} />
//       <skinnedMesh
//         name="EyeLeft"
//         geometry={nodes.EyeLeft.geometry}
//         material={materials.Wolf3D_Eye}
//         skeleton={nodes.EyeLeft.skeleton}
//         morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
//         morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
//       />
//       <skinnedMesh
//         name="EyeRight"
//         geometry={nodes.EyeRight.geometry}
//         material={materials.Wolf3D_Eye}
//         skeleton={nodes.EyeRight.skeleton}
//         morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
//         morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
//       />
//       <skinnedMesh
//         name="Wolf3D_Head"
//         geometry={nodes.Wolf3D_Head.geometry}
//         material={materials.Wolf3D_Skin}
//         skeleton={nodes.Wolf3D_Head.skeleton}
//         morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
//         morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
//       />
//       <skinnedMesh
//         name="Wolf3D_Teeth"
//         geometry={nodes.Wolf3D_Teeth.geometry}
//         material={materials.Wolf3D_Teeth}
//         skeleton={nodes.Wolf3D_Teeth.skeleton}
//         morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
//         morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
//       />
//       <skinnedMesh
//         geometry={nodes.Wolf3D_Hair.geometry}
//         material={materials.Wolf3D_Hair}
//         skeleton={nodes.Wolf3D_Hair.skeleton}
//       />
//       <skinnedMesh
//         geometry={nodes.Wolf3D_Glasses.geometry}
//         material={materials.Wolf3D_Glasses}
//         skeleton={nodes.Wolf3D_Glasses.skeleton}
//       />
//       <skinnedMesh
//         geometry={nodes.Wolf3D_Outfit_Top.geometry}
//         material={materials.Wolf3D_Outfit_Top}
//         skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
//       />
//       <skinnedMesh
//         geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
//         material={materials.Wolf3D_Outfit_Bottom}
//         skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
//       />
//       <skinnedMesh
//         geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
//         material={materials.Wolf3D_Outfit_Footwear}
//         skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
//       />
//       <skinnedMesh
//         geometry={nodes.Wolf3D_Body.geometry}
//         material={materials.Wolf3D_Body}
//         skeleton={nodes.Wolf3D_Body.skeleton}
//       />
//     </group>
//   );
// };

// useGLTF.preload("./models/rohith.glb");

// export default Rohith;

// import React, { useEffect, useRef } from "react";
// import PropTypes from "prop-types";
// import { useAnimations, useFBX, useGLTF } from "@react-three/drei";

// const Rohith = ({ animationName = "idle", ...props }) => {
//   const group = useRef();
//   const { nodes, materials } = useGLTF("./models/rohith.glb");

//   // Load multiple animations
//   const { animations: idleAnimation } = useFBX("./models/idle.fbx");
//   const { animations: walkAnimation } = useFBX("./models/walk.fbx");
//   // Add more animations as needed
//   // const { animations: runAnimation } = useFBX("./models/run.fbx");

//   // Set animation names
//   idleAnimation[0].name = "idle";
//   walkAnimation[0].name = "walk";
//   // runAnimation[0].name = "run";

//   // Setup animations
//   const { actions } = useAnimations(
//     [
//       idleAnimation[0],
//       walkAnimation[0],
//       // runAnimation[0]
//     ],
//     group
//   );

//   useEffect(() => {
//     // Stop all animations first
//     Object.values(actions).forEach((action) => action?.stop());

//     // Play the requested animation
//     if (actions[animationName]) {
//       actions[animationName].reset().fadeIn(0.5).play();
//     }

//     return () => {
//       if (actions[animationName]) {
//         actions[animationName].fadeOut(0.5);
//       }
//     };
//   }, [animationName, actions]);

//   // Optimization effects
//   useEffect(() => {
//     // Optimize materials from the main GLTF model
//     Object.values(materials).forEach((material) => {
//       if (material) {
//         material.precision = "mediump";
//         if (material.map) {
//           material.map.generateMipmaps = false;
//         }
//       }
//     });
//   }, [materials]);

//   return (
//     <group {...props} dispose={null} ref={group}>
//       <primitive object={nodes.Hips} />
//       <skinnedMesh
//         name="EyeLeft"
//         geometry={nodes.EyeLeft.geometry}
//         material={materials.Wolf3D_Eye}
//         skeleton={nodes.EyeLeft.skeleton}
//         morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
//         morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
//         castShadow={false}
//         receiveShadow={false}
//         frustumCulled={true}
//       />
//       <skinnedMesh
//         name="EyeRight"
//         geometry={nodes.EyeRight.geometry}
//         material={materials.Wolf3D_Eye}
//         skeleton={nodes.EyeRight.skeleton}
//         morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
//         morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
//         castShadow={false}
//         receiveShadow={false}
//         frustumCulled={true}
//       />
//       <skinnedMesh
//         name="Wolf3D_Head"
//         geometry={nodes.Wolf3D_Head.geometry}
//         material={materials.Wolf3D_Skin}
//         skeleton={nodes.Wolf3D_Head.skeleton}
//         morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
//         morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
//         castShadow={false}
//         receiveShadow={false}
//         frustumCulled={true}
//       />
//       <skinnedMesh
//         name="Wolf3D_Teeth"
//         geometry={nodes.Wolf3D_Teeth.geometry}
//         material={materials.Wolf3D_Teeth}
//         skeleton={nodes.Wolf3D_Teeth.skeleton}
//         morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
//         morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
//         castShadow={false}
//         receiveShadow={false}
//         frustumCulled={true}
//       />
//       <skinnedMesh
//         geometry={nodes.Wolf3D_Hair.geometry}
//         material={materials.Wolf3D_Hair}
//         skeleton={nodes.Wolf3D_Hair.skeleton}
//         castShadow={false}
//         receiveShadow={false}
//         frustumCulled={true}
//       />
//       <skinnedMesh
//         geometry={nodes.Wolf3D_Glasses.geometry}
//         material={materials.Wolf3D_Glasses}
//         skeleton={nodes.Wolf3D_Glasses.skeleton}
//         castShadow={false}
//         receiveShadow={false}
//         frustumCulled={true}
//       />
//       <skinnedMesh
//         geometry={nodes.Wolf3D_Outfit_Top.geometry}
//         material={materials.Wolf3D_Outfit_Top}
//         skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
//         castShadow={false}
//         receiveShadow={false}
//         frustumCulled={true}
//       />
//       <skinnedMesh
//         geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
//         material={materials.Wolf3D_Outfit_Bottom}
//         skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
//         castShadow={false}
//         receiveShadow={false}
//         frustumCulled={true}
//       />
//       <skinnedMesh
//         geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
//         material={materials.Wolf3D_Outfit_Footwear}
//         skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
//         castShadow={false}
//         receiveShadow={false}
//         frustumCulled={true}
//       />
//       <skinnedMesh
//         geometry={nodes.Wolf3D_Body.geometry}
//         material={materials.Wolf3D_Body}
//         skeleton={nodes.Wolf3D_Body.skeleton}
//         castShadow={false}
//         receiveShadow={false}
//         frustumCulled={true}
//       />
//     </group>
//   );
// };

// // PropTypes validation
// Rohith.propTypes = {
//   animationName: PropTypes.string,
//   position: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.number),
//     PropTypes.object,
//   ]),
//   rotation: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.number),
//     PropTypes.object,
//   ]),
//   scale: PropTypes.oneOfType([
//     PropTypes.number,
//     PropTypes.arrayOf(PropTypes.number),
//     PropTypes.object,
//   ]),
//   visible: PropTypes.bool,
//   castShadow: PropTypes.bool,
//   receiveShadow: PropTypes.bool,
// };

// // Default props
// Rohith.defaultProps = {
//   animationName: "idle",
// };

// useGLTF.preload("./models/rohith.glb");

// export default Rohith;
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Modified to support animation control
*/
import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations, useFBX } from "@react-three/drei";

export function Rohith({ animationName = "idle", ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./models/idle.glb");

  // Load additional animations if needed
  // Uncomment and add paths to your other animation files
  // const { animations: walkAnimations } = useFBX('/walk.fbx')
  // const { animations: runAnimations } = useFBX('/run.fbx')

  // Combine all animations
  let allAnimations = [...animations];

  // If you have additional FBX animations, add them here
  // if (walkAnimations?.[0]) {
  //   walkAnimations[0].name = 'walk'
  //   allAnimations.push(walkAnimations[0])
  // }
  // if (runAnimations?.[0]) {
  //   runAnimations[0].name = 'run'
  //   allAnimations.push(runAnimations[0])
  // }

  const { actions } = useAnimations(allAnimations, group);

  // Animation control effect
  useEffect(() => {
    // Debug logging
    console.log("Available animations:", Object.keys(actions));
    console.log("Requested animation:", animationName);

    // Stop all current animations
    Object.values(actions).forEach((action) => {
      if (action) {
        action.stop();
      }
    });

    // Play the requested animation
    if (actions[animationName]) {
      actions[animationName].reset().fadeIn(0.5).play();
      console.log(`Playing animation: ${animationName}`);
    } else {
      console.warn(
        `Animation "${animationName}" not found. Available:`,
        Object.keys(actions)
      );
      // Fallback to first available animation
      const firstAnimation = Object.keys(actions)[0];
      if (firstAnimation && actions[firstAnimation]) {
        actions[firstAnimation].reset().fadeIn(0.5).play();
        console.log(`Fallback: Playing ${firstAnimation}`);
      }
    }

    // Cleanup function
    return () => {
      if (actions[animationName]) {
        actions[animationName].fadeOut(0.5);
      }
    };
  }, [animationName, actions]);

  // Auto-play the first animation on mount
  useEffect(() => {
    const animationKeys = Object.keys(actions);
    if (animationKeys.length > 0 && !animationName) {
      const firstAnimation = animationKeys[0];
      if (actions[firstAnimation]) {
        actions[firstAnimation].play();
      }
    }
  }, [actions, animationName]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <group name="RootNode">
          <group name="rig" scale={100}>
            <primitive object={nodes.root} />
          </group>
          <group name="rohith" scale={100}>
            <skinnedMesh
              name="rohith_1"
              geometry={nodes.rohith_1.geometry}
              material={materials["Wolf3D_Eye.001"]}
              skeleton={nodes.rohith_1.skeleton}
              castShadow={false}
              receiveShadow={false}
              frustumCulled={true}
            />
            <skinnedMesh
              name="rohith_2"
              geometry={nodes.rohith_2.geometry}
              material={materials["Wolf3D_Skin.001"]}
              skeleton={nodes.rohith_2.skeleton}
              castShadow={false}
              receiveShadow={false}
              frustumCulled={true}
            />
            <skinnedMesh
              name="rohith_3"
              geometry={nodes.rohith_3.geometry}
              material={materials["Wolf3D_Teeth.001"]}
              skeleton={nodes.rohith_3.skeleton}
              castShadow={false}
              receiveShadow={false}
              frustumCulled={true}
            />
            <skinnedMesh
              name="rohith_4"
              geometry={nodes.rohith_4.geometry}
              material={materials["Wolf3D_Hair.001"]}
              skeleton={nodes.rohith_4.skeleton}
              castShadow={false}
              receiveShadow={false}
              frustumCulled={true}
            />
            <skinnedMesh
              name="rohith_5"
              geometry={nodes.rohith_5.geometry}
              material={materials["Wolf3D_Glasses.001"]}
              skeleton={nodes.rohith_5.skeleton}
              castShadow={false}
              receiveShadow={false}
              frustumCulled={true}
            />
            <skinnedMesh
              name="rohith_6"
              geometry={nodes.rohith_6.geometry}
              material={materials["Wolf3D_Outfit_Top.001"]}
              skeleton={nodes.rohith_6.skeleton}
              castShadow={false}
              receiveShadow={false}
              frustumCulled={true}
            />
            <skinnedMesh
              name="rohith_7"
              geometry={nodes.rohith_7.geometry}
              material={materials["Wolf3D_Outfit_Bottom.001"]}
              skeleton={nodes.rohith_7.skeleton}
              castShadow={false}
              receiveShadow={false}
              frustumCulled={true}
            />
            <skinnedMesh
              name="rohith_8"
              geometry={nodes.rohith_8.geometry}
              material={materials["Wolf3D_Outfit_Footwear.001"]}
              skeleton={nodes.rohith_8.skeleton}
              castShadow={false}
              receiveShadow={false}
              frustumCulled={true}
            />
            <skinnedMesh
              name="rohith_9"
              geometry={nodes.rohith_9.geometry}
              material={materials["Wolf3D_Body.001"]}
              skeleton={nodes.rohith_9.skeleton}
              castShadow={false}
              receiveShadow={false}
              frustumCulled={true}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./models/idle.glb");

export default Rohith;
