## Codebase Cleanup & Readability Guidelines

This project has undergone an initial readability refactor focused on making code more approachable and maintainable. The following guidelines capture the conventions to continue applying.

### Naming
* Prefer full descriptive names: `duration`, `payload`, `viewport` instead of cryptic abbreviations.
* Booleans should read positively: `isActive`, `hasLoaded`, `shouldAnimate`.
* Functions: verb first (`buildRectPayload`, `startBoot`, `restartBoot`).
* Files: one primary component/hook per file; colocate small helpers if uniquely tied.

### Components & Hooks
* Keep React components under ~150 lines; extract logic hooks (e.g. event wiring, payload building) when they grow.
* Hooks start with `use` and encapsulate one responsibility.
* Avoid in‑effect long procedural blocks; extract named helpers (see `Home.jsx` boot payload builder).

### Transitions
* All transition actions go through the `useTransition` context.
* Boot transitions use `mode: 'boot'` in payload; rest are generic.
* Payload structure (rect + viewport) is produced by helpers in `buildPayload.js`; do not duplicate manual rect math elsewhere.

### State & Side Effects
* Use `useRef` only for mutable, non‑visual state (e.g. busy flags, animation handles).
* For timers / RAF loops, store identifiers in refs and always clean up in `useEffect` return.

### WebGL / Three.js
* Initialization effect: create renderer + scene + camera, append DOM, start RAF; cleanup disposes all resources.
* Separate effect blocks by concern: geometry/uniform updates, resource loading, animation progress.
* Keep uniforms object shape stable; update values in dedicated effects.

### Comments
* Prefer high‑level intent over narrating obvious code. Remove redundant comments when variable / function names are self‑descriptive.
* Use JSDoc blocks for exported hooks/components when behavior may not be immediately obvious.

### Formatting & Linting
* Prettier config (`.prettierrc.json`) enforces single quotes, 100 column width, trailing commas.
* ESLint rules warn on excessive function length / complexity and encourage const usage.

### Incremental Refactor Strategy
1. Identify a file with high complexity or duplication.
2. Add small pure helpers (do not introduce premature abstractions).
3. Replace duplicated logic with shared utilities (e.g. payload building).
4. Run lint (`npm run lint`) and format (`npx prettier --write .`).
5. Manually test transitions/navigation.

### Future Improvements
* Introduce TypeScript for stronger contracts (start with `strict: true` in a per‑folder migration).
* Add unit tests for payload builders and timing utilities.
* Provide accessibility review (focus states, ARIA for animated regions).
* Consider splitting large shader components into hook + view separation.
* Explore batching multiple shader materials under a single shared renderer if needed.

### Shader Utilities (New)

`useFullscreenShader` now supports frame subscribers:

```jsx
const { mountRef, uniforms, addFrameCallback } = useFullscreenShader({ createMaterial });
useEffect(() => {
	const unsubscribe = addFrameCallback((time, delta) => {
		// drive custom per-frame logic
		uniforms.uProgress.value = Math.min(1, (time - startStart) / duration);
	});
	return () => unsubscribe();
}, []);
```

Rect mapping helpers in `rectUniforms.js`:
* `normalizeRect(rect, viewport)` → `{ cx, cy, w, h }`
* `applyRectUniforms(uniforms, normalized)`
* `applyPayloadRect(uniforms, payload)` – recommended entry point.

Use `applyPayloadRect` inside an effect when payload changes to sync shader uniforms.

### Contributing
* Follow naming & structural guidelines above.
* Avoid adding new third‑party libraries without discussing tradeoffs (bundle size, overlap).
* Keep PRs focused: one feature or refactor scope per PR.

