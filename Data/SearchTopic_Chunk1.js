define({"71":{i:0.008154188450576,u:"../Content/Services/ServiceSDK_ReactorPromiseCompositionalMethods.htm",a:"Use the following compositional methods for a Promise: pure() The pure() methods return a direct conclusion, which is the simplest type of result: try { ServiceProviderResponse response = new ServiceProviderResponse(); response.setStatus(Status.COMPLETE); // This Promise\u0027s isCompleted() will return ...",t:"Promise Compositional Methods"},"72":{i:0.008154188450576,u:"../Content/Services/ServiceSDK_ReactorCompletablePromise.htm",a:"CompletablePromise has two public methods that are invoked when an operation is performed by the Agility Platform Reactor. The methods are also A unit test for adapter code can utilize a CompletablePromise that is created via the PromiseFactory, such as the following: import ...",t:"The CompletablePromise Class"},"73":{i:0.008154188450576,u:"../Content/Services/ServiceSDK_ReactorHTTPclient.htm",a:"Use the Async HttpClient library to easily execute HTTP requests and asynchronously process the HTTP responses. HttpClient has one public method promise, which takes in a request of type IHttpRequest and returns a Promise of type IHttpResponse.  The Promise call takes an HTTP request and returns a ...",t:"HttpClient with Promises"},"74":{i:0.008154188450576,u:"../Content/Services/ServiceSDK_ServiceAdapterClassSPI.htm",a:"ServiceAdapter Class and SPI Interfaces Every service adapter extends the Services SDK ServiceAdapter class. The following diagram illustrates an example where AdapterClass represents the implementing class for a service adapter.",t:"ServiceAdapter Class and SPI Interfaces"},"75":{i:0.008154188450576,u:"../Content/Services/ServiceSDK_ServiceAdapterMethods.htm",a:"The service adapter class must implement the following ServiceAdapter abstract methods: For more information about the RegistrationRequest, see  The RegistrationRequest Class and Object . The service adapter class can optionally choose to override the following ServiceAdapter methods:",t:"ServiceAdapter Methods"},"76":{i:0.008154188450576,u:"../Content/Services/ServiceSDK_ServiceAdapterInitialization.htm",a:"The initialization sequence for the service adapter results in a notification to the ServiceFramework so that it can service as the proxy for later operations involving the service adapter. The RegistrationResponse passed into onRegistration includes these methods: An empty implementation of ...",t:"ServiceAdapter Initialization"},"77":{i:0.008154188450576,u:"../Content/Services/ServiceSDK_JAXBContextVendorAPI.htm",a:"Many cloud vendors provide an HTTP/REST API for administering a service. As a result, a common pattern for service adapters is the serialization/deserialization of vendor objects via the Java Architecture for XML Binding (JAXB). To effectively run within an OSGi context, it is advisable to retain a ...",t:"JAXBContext for Vendor API"},"78":{i:0.008154188450576,u:"../Content/Services/ServiceSDK_IServiceProvider.htm",a:"The com.servicemesh.agility.sdk.service.spi.IServiceProvider interface returned by getServiceProviderOperations() includes  a standard set of operations for managing the service provider, as well as lifecycle callouts for changes to the service provider configuration/definition. These methods ...",t:"Service Provider (IServiceProvider)"},"79":{i:0.008154188450576,u:"../Content/Services/ServiceSDK_ServiceProviderRequestClass.htm",a:"The Services SDK ServiceProviderRequest class is the basis for the parameter to the IServiceProvider methods. The ServiceProviderRequest methods provide information to the service adapter: The ServiceProviderType and ServiceProvider lists for associated assets is passed to a service adapter so that ...",t:"ServiceProviderRequest Class"},"80":{i:0.008154188450576,u:"../Content/Services/ServiceSDK_ServiceProviderResponseClass.htm",a:"ServiceProviderResponse Class The Services SDK ServiceProviderResponse class is returned by an IServiceProvider method. The ServiceProviderResponse object allows a service adapter to provide information back to the Agility Platform Services framework.",t:"ServiceProviderResponse Class"},"81":{i:0.008154188450576,u:"../Content/Services/ServiceSDK_ServiceProviderOperations.htm",a:"Most of the IServiceProvider methods use Services SDK derivations of ServiceProviderRequest that provide no additional attributes:\n ServiceProviderPreCreateRequest ServiceProviderPostCreateRequest ServiceProviderPreUpdateRequest ServiceProviderPostUpdateRequest ServiceProviderPreDeleteRequest ...",t:"ServiceProviderOperations Methods"},"82":{i:0.008154188450576,u:"../Content/Services/ServiceSDK_IInstanceLifecycle.htm",a:"A Blueprint can contain design connections between a Workload and a Service. When the Blueprint is deployed, the Agility Platform creates an Instance asset for each Workload and a ServiceInstance asset  for each Service. The design connections define the dependencies between these  created assets: ...",t:"Instance Lifecycle (IInstanceLifecycle)"},"83":{i:0.008154188450576,u:"../Content/Services/ServiceSDK_InstanceRequestClass.htm",a:"The Services SDK InstanceRequest class is the basis for the parameter to the IInstanceLifecycle methods. InstanceRequest extends ServiceProviderRequest with the following methods: Access to variables in  the scope of a ServiceInstance (variables on Projects, Environments, and Topologies that are ...",t:"InstanceRequest Class"},"84":{i:0.008154188450576,u:"../Content/Services/ServiceSDK_InstanceResponseClass.htm",a:"InstanceResponse Class The Services SDK InstanceResponse class is wrapped by the promise returned by the InstanceLifecycle methods. InstanceResponse extends ServiceProviderResponse with the following methods:",t:"InstanceResponse Class"},"85":{i:0.008154188450576,u:"../Content/Services/ServiceSDK_InstanceOperations.htm",a:"All of the IInstanceLifecycle methods use Services SDK derivations of InstanceRequest that provide no additional attributes: InstancePostBootRequest InstancePostProvisionRequest InstancePostReconfigureRequest InstancePostReleaseRequest InstancePostRestartRequest InstancePostStartRequest ...",t:"InstanceOperations Methods"},"86":{i:0.008154188450576,u:"../Content/Services/ServiceSDK_IServiceInstance.htm",a:"The Agility Platform creates a ServiceInstance asset upon successful deployment of a Blueprint containing a Service.  The com.servicemesh.agility.sdk.service.spi.IServiceInstance interface returned by a service adapter getServiceInstanceOperations() represents the operations for a ServiceInstance. ...",t:"Service Instance (IServiceInstance)"},"87":{i:0.008154188450576,u:"../Content/Services/ServiceSDK_ServiceInstanceRequestClass.htm",a:"The Services SDK ServiceInstanceRequest class is the basis for the parameter to the IServiceInstanceLifecycle methods. ServiceInstanceRequest extends ServiceProviderRequest with the following methods: Access to variables in  the scope of a ServiceInstance (variables on Projects, Environments, and ...",t:"ServiceInstanceRequest Class"},"88":{i:0.008154188450576,u:"../Content/Services/ServiceSDK_ServiceInstanceOperations.htm",a:"Most of the IServiceInstance methods use Services SDK derivations of ServiceInstanceRequest that provide no additional attributes:\n\n ServiceInstanceProvisionRequest ServiceInstanceReconfigureRequest ServiceInstanceReleaseRequest ServiceInstanceStartRequest ServiceInstanceStopRequest ...",t:"ServiceInstanceOperations Methods"},"89":{i:0.008154188450576,u:"../Content/Services/ServiceSDK_IServiceInstanceLifecycle.htm",a:"Just as a Blueprint can contain design connections between Workloads and Services, it can also contain design connections between two Services. The Service-Service design connection also has a Source end and a Destination end, but the source ServiceInstance asset is dependent upon the destination ...",t:"Service Instance Lifecycle (IServiceInstanceLifecycle)"},"90":{i:0.008154188450576,u:"../Content/Services/ServiceSDK_ServiceInstanceLifecycleRequest.htm",a:"ServiceInstanceLifecycleRequest Class The Services SDK ServiceInstanceLifecycleRequest class is the basis for the parameter to the IServiceInstanceLifecycle methods. ServiceInstanceLifecycleRequest extends ServiceInstanceRequest with the following method:",t:"ServiceInstanceLifecycleRequest Class"},"91":{i:0.008154188450576,u:"../Content/Services/ServiceSDK_ServiceInstanceLifecycleOperations.htm",a:"All of the IServiceInstanceLifecycle methods use a Services SDK derivation of ServiceInstanceRequest that provides no additional attributes: ServiceInstancePostProvisionRequest ServiceInstancePostReleaseRequest ServiceInstancePostRestartRequest ServiceInstancePostStartRequest ...",t:"ServiceInstanceLifecycleOperations Methods"},"92":{i:0.008154188450576,u:"../Content/Services/ServiceSDK_IAssetLifecycle.htm",a:"The AssetOperations exist to allow service adapters to receive notifications and perform any necessary actions when a CRUD operation is executed for an associated Asset. The Service SDK IAssetLifecycle interface represents the operations for a service adapter to consider when an Asset associated ...",t:"Asset Lifecycle (IAssetLifecycle)"},"93":{i:0.008154188450576,u:"../Content/Services/ServiceSDK_AssetLifecycleRequestClass.htm",a:"To support the AssetOperations for a service adapter, there are six Request classes: PreCreateRequest PostCreateRequest PreUpdateRequest PostUpdateRequest PreDeleteRequest PostDeleteRequest All six of these classes extend ServiceInstanceRequest with the following methods: Registration of Asset In ...",t:"AssetOperations Request Classes"},"94":{i:0.008154188450576,u:"../Content/Services/ServiceSDK_AssetLifecycleOperations.htm",a:"The Services SDK provides com.servicemesh.agility.sdk.service.operations.AssetOperations as a default implementation of IAssetLifecycle, for which every method simply returns a completed promise. The service adapter has no way to persist any changes made to the Asset or the Service Instance. ...",t:"Extending Asset Operations"},"95":{i:0.008154188450576,u:"../Content/Services/ServiceSDK_IConnection.htm",a:"The Agility Platform REST API provides methods for affecting deployed connections between VM templates and service instances (or between service instances). Invocation of a POST, PUT, or DELETE method triggers the service adapter connection operations if either end of the connection has a service ...",t:"Connection (IConnection)"},"96":{i:0.008154188450576,u:"../Content/Services/ServiceSDK_ConnectionRequestClass.htm",a:"The Services SDK ConnectionRequest class is the basis for the parameter to the IConnection methods. ConnectionRequest extends ServiceProviderRequest with the following method: Access to variables in  the scope of a ServiceInstance (variables on Projects, Environments, and Topologies that are direct ...",t:"ConnectionRequest Class"},"97":{i:0.008154188450576,u:"../Content/Services/ServiceSDK_ConnectionOperations.htm",a:"All of the IConnection methods use a Services SDK derivation of ConnectionRequest that provides no additional attributes: ConnectionPostCreateRequest ConnectionPostDeleteRequest ConnectionPostUpdateRequest ConnectionPreCreateRequest ConnectionPreDeleteRequest ConnectionPreUpdateRequest The Services ...",t:"ConnectionOperations Methods"},"98":{i:0.008154188450576,u:"../Content/Services/ServiceAdapterExamples.htm",a:"Service Adapter Examples The examples of service adapters assume that you have working knowledge of the concepts and methods introduced in the previous chapters of the SDK guide. ",t:"Service Adapter Examples"},"99":{i:0.008154188450576,u:"../Content/Services/ServiceSDK_ServiceAdapterOwnPackagesScripts.htm",a:"A service adapter may support a service with dynamic attributes that must be applied on a VM instance that utilizes that service. For example, the cloud hosting the service may assign the service a fully qualified domain name that must be configured on a connected VM instance so that the VM instance ...",t:"Providing Packages and Scripts for the Adapter"},});