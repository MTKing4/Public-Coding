// C# Code Structure
// Code translation flow
// C# -> IL Code (intermediary Language Code) -> Native Code (Machine Language)
// CLR: is an application that is sitting in the memory whose job is to translate the IL code into machine code in a process called Just-in-time Compilation (JIT)
// purpose of the IL code is to allow translation between different procesor Architecture like x86


// Architecture of .NET Applications

// they are from smallest component starting with the class to the largest: Assembly
// Class -> Namespace -> Assembly (DLL or EXE)  (DLL: Dynamically Linked Library)
// Assembly is a container for related namespaces
// a namespace is a container of related classes
// Application can contain multiple Assemblies