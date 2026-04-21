# 📊 Documento de Optimizaciones - JAZ-Project

**Asignatura:** Práctica 3 — Optimización, Testing y Calidad

---

## 📋 Tabla de Contenidos

1.  Re-renders Innecesarios de Componentes. Se aplica el React.Memo
2.  Se utiliza el useMemo
3.  Se utiliza el useCallback
4.  Optimizaciones Next.js Específicas

---

## 🔍 Problemas Identificados

### **Problema 1: Re-renders Innecesarios de Componentes**

#### Aplicacion de React.memo

Los componentes `ProjectsListPresentation` y `TicketsColumns` se re-renderizaban en cada cambio de estado del componente padre, aunque sus props no hubieran cambiado.

```typescript
// ❌ ANTES - Sin optimización
export const ProjectsListPresentation = ({
listProjects,
handleAddProject,
handleSelectProject,
}: PropsListPresentation) => {
// Se re-renderiza en cada render del padre
return (
<div className="CardContainer">
{listProjects.map((project) => (
// Render innecesario de cada Card
))}
</div>
);
};
```

```typescript
// Optimizacion - con React.memo
export const ProjectsListPresentation = React.memo( ({
listProjects,
handleAddProject,
handleSelectProject,
}: PropsListPresentation) => {
// Se re-renderiza en cada render del padre
return (
<div className="CardContainer">
{listProjects.map((project) => (
// Render innecesario de cada Card
))}
</div>
);
});
```

### **Problema 2: Computaciones Costosas sin Memorización**

#### Aplicacion de useMemo

Las funciones de filtrado de tickets (`getTicketsByStatus`, `getTicketsByProjects`) se ejecutaban en cada render, incluso cuando los datos no cambiaban.

Sin `useMemo`, las operaciones de filter/map se re-ejecutaban innecesariamente.

```typescript
// ❌ ANTES - Sin useMemo
const ticketsFilters = getTicketsByProjects({ listTickets, projectId });
// Se re-calcula en cada render aunque listTickets y projectId no cambien
```

```typescript
// Optimizacion - Con useMemo
const ticketsFilters = useMemo(() => {
  return getTicketsByProjects({ listTickets, projectId });
}, [listTickets, projectId]);
```

### **Problema 3: Closures y Referencias Inestables en Callbacks**

#### Aplicacion de useCallbacks

Handlers como `handleChangeStatus` y `handleAddTicket` se recreaban en cada render, causando comparación de referencias fallida en `React.memo`.

Funciones callback definidas directamente en componentes sin `useCallback`.

```typescript
// ❌ ANTES - Sin useCallback
const handleChangeStatus = (ticket: Tickets) => {
  dispatch({ type: "CHANGE_STATUS", payload: ticket });
};
// Nueva referencia en cada render
```

```typescript
// Optimizacion - con useCallback
const tickets = useMemo(() => {
  return getTicketsByStatus({ ticketsList, status });
}, [ticketsList, status]);
```

---

## 🚀 Optimizaciones Next.js Específicas

### **1. Image Optimization**

Next.js proporciona optimización de imágenes automática mediante el componente `<Image>`:

```typescript
import Image from 'next/image';

// ✅ Imágenes automáticamente optimizadas
<Image
  src="/project-image.png"
  alt="Project"
  width={300}
  height={200}
  priority={false} // Lazy loading por defecto
/>
```

**Beneficio**: Reducción de tamaño de imagen hasta 80%
